import { createContext, useEffect, useState, ReactNode } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../config/Firebase.config";

const GoogleProvider = new GoogleAuthProvider();

interface ThemeInfo {
  googleSignIn: () => Promise<void>;
  loading: boolean;
  signInUser: (email: string, password: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
  user: any;
  logOut: () => Promise<void>;
  createUser: (email: string, password: string) => Promise<void>;
}

export const ThemeContext = createContext<ThemeInfo | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email: string, password: string): Promise<any> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email: string, password: string): Promise<any> => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = (): Promise<any> => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const logOut = (): Promise<void> => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Observed User:", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  const themeInfo: ThemeInfo = {
    googleSignIn,
    loading,
    signInUser,
    setLoading,
    user,
    logOut,
    createUser,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;