import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const githubAuthProvider = new GithubAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  // Github SignIn
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubAuthProvider);
  };
  // SignOut
  const handleSignOut = () => {
    return signOut(auth);
  };
  //create user email
  const createUserWithEmail = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
// login user email
  const loginWithEmailPassword = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = { user, signInWithGoogle, signInWithGithub, handleSignOut, createUserWithEmail, loginWithEmailPassword };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
