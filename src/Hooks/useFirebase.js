import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"

initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                //save user to the dtabase
                saveUser(email, name)
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {


                }).catch((error) => {

                });

                // Signed in 
                history.replace('/')

                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('')

            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setAuthError('')
            // Sign-out successful.
        }).catch((error) => {
            setAuthError(error.message);
            // An error happened.
        })
            .finally(() => setIsLoading(false))

    }

    const saveUser = (email, displayName) => {

    }

    const signinWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    }, [])

    return {
        user,
        registerUser,
        loginUser,
        logout,
        isLoading,
        authError,
        signinWithGoogle
    }


}

export default useFirebase;