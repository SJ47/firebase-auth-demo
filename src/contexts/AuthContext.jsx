// This is an authProvider where we have a currentUser and return that inside
// our provider to use anywhere in our application
// Using firebase to get our currentUser

import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

import firebase from "firebase/app";
import "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function signout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateProfile(displayName) {
        return auth.currentUser.updateProfile(displayName);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    function sendVerificationEmail(user) {
        return user.sendEmailVerification();
    }

    function deleteAccount() {
        return currentUser.delete();
    }

    function reauthenticateUser(credential) {
        return currentUser.reauthenticateWithCredential(credential);
    }

    function setPersistence(rememberMe) {
        console.log("Remember me: ", rememberMe);
        return rememberMe
            ? auth.setPersistence("local")
            : auth.setPersistence("session");
    }

    // Sign in with Google Functions
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
        // return firebase.auth().signInWithRedirect(provider);

        // return auth.signInWithPopup(provider);
    }

    // import firebase from "firebase/app";

    // export const signInWithGoogle = async () => {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     await firebase.auth().signInWithPopup(provider);
    // };

    // Only run this when our component mounts and unsubscribe from it where we are done to tidy up the event listener
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            // we call the unsubscibe as it returns a method when called that will unsubscribe the onAuthChanged event
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signin,
        signup,
        signout,
        resetPassword,
        updateProfile,
        updateEmail,
        updatePassword,
        sendVerificationEmail,
        deleteAccount,
        reauthenticateUser,
        setPersistence,
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
