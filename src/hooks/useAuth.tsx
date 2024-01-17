import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

interface AuthContextType {
  googleSignIn: () => Promise<void>;
  githubSignIn: () => Promise<void>;
  loading: boolean;
  signInUser: (email: string, password: string) => Promise<void>;
  setLoading: (loading: boolean) => void;
  user: any;
  logOut: () => Promise<void>;
  createUser: (email: string, password: string) => Promise<void>;
  updateUserProfile: (name: string) => Promise<void>;
}


const useAuth: () => AuthContextType = () => {
  const auth = useContext(ThemeContext);

  if (!auth) {
    throw new Error("useAuth must be used within a ThemeProvider");
  }

  return auth;
};

export default useAuth;
