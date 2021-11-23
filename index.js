const express = require("express");
const app = express();
const admin = require("firebase-admin");
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  ),
});
/**
 * MIDDLE WARE
 */
app.use(cors());
app.use(express.json());
// ----------------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLIENT_URL}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function verifyToken(req, res, next) {
  if (
    req?.headers?.idtoken?.startsWith("Bearer ") ||
    req?.body?.headers?.idToken?.startsWith("Bearer ")
  ) {
    const token =
      req?.headers?.idtoken?.split(" ")[1] ||
      req?.body?.headers?.idToken?.split(" ")[1];
    try {
      const decodedUser = await admin.auth().verifyIdToken(token);
      req.decodedEmail = decodedUser.email;
    } catch (err) {
      console.log(err.code);
    }
  }
  next();
}

(async () => {
  try {
    /**
     * connect client
     */
    await client.connect();
    /**
     * db and collection
     */
    const DB_BB = client.db("BB-bicycle-buy");
    const Users_Collection = DB_BB.collection("users");
    const products_Collection = DB_BB.collection("bb-products");
    const orders_Collection = DB_BB.collection("bb-orders");
    const reviews_Collection = DB_BB.collection("bb-reivews");
    /**
     * Post user
     */
    app.post("/users", async (req, res) => {
      const data = req.body;
      const result = await Users_Collection.insertOne(data);
      res.send(result);
    });
    /**
     * get user
     */
    app.get("/users", async (req, res) => {
      const query = { role: "user" };
      const result = await Users_Collection.find(query).toArray();
      res.json(result);
    });
    /**
     * get user
     */
    app.get("/admins", async (req, res) => {
      const query = { role: "admin" };
      const result = await Users_Collection.find(query).toArray();
      res.json(result);
    });
    /**
     * is admin ?
     */
    app.get("/admin/:email", async (req, res) => {
      const query = req.params;
      const findThisUser = await Users_Collection.findOne(query);
      let isAdmin = false;
      if (findThisUser?.role === "admin") {
        isAdmin = true;
      }
      res.send({ isAdmin });
    });
    /**
     * Make Admin
     */
    app.put("/users", verifyToken, async (req, res) => {
      if (req.decodedEmail) {
        const accessability = await Users_Collection.findOne({
          email: req.decodedEmail,
        });
        if (accessability.role === "admin") {
          const filter = { email: req.body.data.email };
          const updateDoc = { $set: { role: "admin" } };
          const result = await Users_Collection.updateOne(filter, updateDoc);
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });
    /**
     * Make User
     */
    app.put("/admins", verifyToken, async (req, res) => {
      const actionEmail = req.body.data.email;
      const actorEmail = req.decodedEmail;
      if (actorEmail) {
        const own = await Users_Collection.findOne({ email: actorEmail });
        if (own.role === "admin") {
          const filter = { email: actionEmail };
          const updateDoc = { $set: { role: "user" } };
          const result = await Users_Collection.updateOne(filter, updateDoc);
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });
    /**
     * Post Porducts
     */
    app.post("/products", verifyToken, async (req, res) => {
      const validPerson = req.decodedEmail;
      const productData = req.body.data.productData;
      if (validPerson) {
        const person = await Users_Collection.findOne({ email: validPerson });
        if (person.role === "admin") {
          const result = await products_Collection.insertOne(productData);
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });
    /**
     * Delete Porducts
     */
    app.delete("/products", verifyToken, async (req, res) => {
      const validPerson = req.decodedEmail;
      const productId = req.body.productId;
      if (validPerson) {
        const person = await Users_Collection.findOne({ email: validPerson });
        if (person.role === "admin") {
          const result = await products_Collection.deleteOne({
            _id: ObjectId(productId),
          });
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });

    /**
     * get all Porducts
     */
    app.get("/products", async (req, res) => {
      try {
        const count = await products_Collection.find({}).count();
        const homeProduct = await products_Collection
          .find({})
          .limit(6)
          .toArray();
        const data = await products_Collection.find({}).toArray();
        res.json({ count, data, homeProduct });
      } catch {
        res.status(404).json({ message: "Not Found" });
      }
    });
    /**
     * get single Porducts
     */
    app.get("/products/:id", async (req, res) => {
      const id = req.params.id;
      const result = await products_Collection.findOne({ _id: ObjectId(id) });
      res.json(result);
    });

    /**
     * get Order
     */
    app.get("/orders", verifyToken, async (req, res) => {
      const validPerson = req.decodedEmail;
      if (validPerson) {
        const person = await Users_Collection.findOne({ email: validPerson });
        if (person.role === "admin") {
          const result = await orders_Collection.find({}).toArray();
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });
    /**
     * Post Order
     */
    app.post("/orders", verifyToken, async (req, res) => {
      const validPerson = req.decodedEmail;
      const orderData = req.body.data.orderData;
      if (validPerson) {
        const person = await Users_Collection.findOne({ email: validPerson });
        if (person.role === "user") {
          const result = await orders_Collection.insertOne(orderData);
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });
    /**
     * update Order status
     */
    app.put("/orders", verifyToken, async (req, res) => {
      const validPerson = req.decodedEmail;
      const orderId = req.body.data.orderId;
      if (validPerson) {
        const person = await Users_Collection.findOne({ email: validPerson });
        if (person.role === "admin") {
          const filter = { _id: ObjectId(orderId) };
          const updateDoc = { $set: { status: "shipped" } };
          const result = await orders_Collection.updateOne(filter, updateDoc);
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });
    /**
     * delete Order status
     */
    app.delete("/orders", verifyToken, async (req, res) => {
      const validPerson = req.decodedEmail;
      const orderId = req.body.orderId;
      if (validPerson) {
        const person = await Users_Collection.findOne({ email: validPerson });
        if (person.role === "user") {
          const result = await orders_Collection.deleteOne({
            _id: ObjectId(orderId),
          });
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });

    /**
     * get one users Orders
     */
    app.get("/user-orders", verifyToken, async (req, res) => {
      const validPerson = req.decodedEmail;
      if (validPerson) {
        const person = await Users_Collection.findOne({ email: validPerson });
        if (person.role === "user") {
          const result = await orders_Collection
            .find({ email: person.email })
            .toArray();
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });
    /**
     * post review
     */
    app.post("/reviews", verifyToken, async (req, res) => {
      const reviewsData = req.body.data.reviewsData;
      const validPerson = req.decodedEmail;
      if (validPerson) {
        const person = await Users_Collection.findOne({ email: validPerson });
        if (person.role === "user") {
          const result = await reviews_Collection.insertOne(reviewsData);
          res.json(result);
        } else {
          res.status(403).json({ message: "You are not allowed ." });
        }
      } else {
        res.status(401).json({ message: "User Not Found" });
      }
    });
    /**
     * get review
     */
    app.get("/reviews", async (req, res) => {
      const result = await reviews_Collection.find({}).toArray();
      res.json(result);
    });

    // -------------------------------------------
    // -------------------------------------------
    // -------------------------------------------
    // -------------------------------------------
    // -------------------------------------------
    // -------------------------------------------
  } catch (err) {
    console.log(err.message);
  }
})();

app.get("/", (req, res) =>
  res.send(
    `
    <h1 style="font-family:arial;text-align:center;">Server</h1>
    <h4 style="font-family:arial;text-align:center;">B.B Bicycle Buy</h4>
    `
  )
);
app.listen(port, () => console.log("running...."));
