import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const Auth = React.createContext();

export function useAuth() {
  return useContext(Auth);
}

export function AuthsProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
  };

  return <Auth.Provider value={value}>{!loading && children}</Auth.Provider>;
}
