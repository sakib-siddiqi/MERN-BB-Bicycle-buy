import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseApp from "./firebase.config";

// Firebase App initializing
firebaseApp();

const auth = getAuth();
function useFirebase() {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    function updateUserData(name) {
        updateProfile(auth.currentUser, { displayName: name })
            .then((res) => {
                setUser(res.user);
            }).catch((err) => setError(err.code));
    }


    function handleSignUp({ name, email, password }) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateUserData(name);
                setError("");
            })
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    }


    function handleSignIn({ email, password }) {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                setError("");
            })
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    };


    function handleSignOut() {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError('')
            })
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    }


    useEffect(() => {
        try {
            setLoading(true);
            onAuthStateChanged(auth, (user) => {
                (user) ? setUser(user) : setUser({});
            });
        }
        catch (err) { setError(err.code) }
        finally { setLoading(false) }
    }, [])


    return {
        firebase: { user, loading, error },
        handleSignUp,
        handleSignIn,
        handleSignOut,
    }
}

export default useFirebase;