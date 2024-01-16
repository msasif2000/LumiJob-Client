import { createContext, useEffect, useState, ReactNode } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import auth from "../config/Firebase.config";

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

interface ThemeInfo {
  googleSignIn: () => Promise<void>;
  githubSignIn: () => Promise<void>;
  loading: boolean;
  signInUser: (email: string, password: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
  user: any;
  logOut: () => Promise<void>;
  createUser: (email: string, password: string) => Promise<void>;
  passwordReset: (email: string) => Promise<void>;
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

  const githubSignIn = (): Promise<any> => {
    setLoading(true);
    return signInWithRedirect(auth, GithubProvider);
  };

  const passwordReset = (email: string): Promise<any> => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent");
      })
      .catch((error) => {
        console.error("Error sending password reset email", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
    passwordReset,
    githubSignIn,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
