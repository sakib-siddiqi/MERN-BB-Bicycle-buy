import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Table } from "react-bootstrap";
import DashBoardContent from "../../DashBoardContent";
import DashTitle from "../../DashTitle";
import { RiUserSettingsFill, RiUserFill } from "react-icons/ri";
import { TableSkeleton } from "../../../../Shared/Skelaton/SkeletonLoading";
import axios from "axios";
const MakeAdmin = () => {
  const [users,setUsers]=useState([]);
  const [admins,setAdmins]=useState([]);
  const [error,setError]=useState("");

  useEffect(()=>{
      axios
          .get("http://localhost:5000/users")
          .then(res=>setUsers(res.data))
          .catch(err=>setError(err.code));

      axios
          .get("http://localhost:5000/admins")
          .then(res=>setAdmins(res.data))
          .catch(err=>setError(err.code));
  },[])

  return (
    <section>
      <DashTitle bg="#333" text="light">
        Manage Users
      </DashTitle>
      <DashBoardContent className="my-4">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="hoverBlueOutline">
              <Card.Body>
                <Card.Header className="fw-md text-center h5 mb-3 center">
                  <RiUserSettingsFill />
                  Admins
                </Card.Header>
                <Table striped bordered hover responsive="sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   {
                     admins.length?(
                      admins.map((admin,i)=>(
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{admin.email}</td>
                        <td>
                          <Button variant="primary" size="sm">
                            Make User
                          </Button>
                        </td>
                      </tr>
                       ))
                     ):(<TableSkeleton row={4} col={3}/>)
                   }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="hoverBlueOutline">
              <Card.Body>
                <Card.Header className="fw-md text-center h5 mb-3 center">
                  <RiUserFill />
                  Users
                </Card.Header>
                <Table striped bordered hover responsive="sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                  {
                    users.length?(
                      users.map((user,i)=>(
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{user.email}</td>
                          <td>
                            <Button variant="danger" size="sm">
                              Make Admin
                            </Button>
                          </td>
                        </tr>
                      ))
                    ):(<TableSkeleton row={4} col={3}/>)
                  }

                  </tbody>
                </Table>
                {error && <h4 className="text-danger fw-sm ls-1">{error}</h4>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </DashBoardContent>
    </section>
  );
};

export default MakeAdmin;
