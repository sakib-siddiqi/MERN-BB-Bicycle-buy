import axios from "axios";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseApp from "./firebase.config";

// Firebase App initializing
firebaseApp();

const auth = getAuth();

/**
 *
 * use Firebase
 *
 */

function useFirebase() {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    /**
     *
     * Database users funcions
     *
     */

    function saveUser( email) {
        axios
            .post("http://localhost:5000/users", {email, role: "user" })
            .then(res => console.log(res))
            .catch(err => console.log(err.code));
    }


    /**
     *
     * Firebase funcitons
     *
     */
    function updateUserData(name, redirect) {
        updateProfile(auth.currentUser, { displayName: name })
            .then((res) => {
                setUser(res.user);
                redirect();
            })
            .catch((err) => setError(err.code));
    }

    function handleSignUp({ name, email, password }, redirect) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                updateUserData(name, redirect);
                saveUser(res.user.email);
                setError("");
            })
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    }

    function handleSignIn({ email, password }, redirect) {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                redirect();
                setError("");
            })
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    }

    function handleSignOut() {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
            })
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        });
    }, []);

    return {
        firebase: { user, loading, error },
        handleSignUp,
        handleSignIn,
        handleSignOut,
    };
}

export default useFirebase;
