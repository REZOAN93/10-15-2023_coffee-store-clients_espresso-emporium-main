import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

 

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = (provider) => {
    setLoading(true);
    signInWithPopup(auth, provider);
  };

  const updateUser = (profile) => {
    setLoading(true);
    updateProfile(auth.currentUser, profile);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const AuthInfo = {
    createUserWithEmail,
    signInWithEmail,
    signInWithGoogle,
    updateUser,
    signOutUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
