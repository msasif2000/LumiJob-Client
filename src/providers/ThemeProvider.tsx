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
  updateProfile,
} from "firebase/auth";
import auth from "../config/Firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

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
  updateUserProfile: (name: string) => Promise<void>;
  role: any;
  premium: any;
  photo: any;
}

export const ThemeContext = createContext<ThemeInfo | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null)
  const [premium, setPremium] = useState(null)
  const [photo, setPhoto] = useState(null)
  const axiosPublic = useAxiosPublic(); 

  const createUser = (email: string, password: string): Promise<any> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential.user);
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
      // console.log("Observed User:", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  
  const updateUserProfile = (name: string): Promise<void> => {
    setLoading(true);
    const user = auth.currentUser;
    if (user) {
      return updateProfile(user, {
        displayName: name,
      })
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error updating user profile:", error);
          setLoading(false);
        });
    } else {
      console.error("No authenticated user found.");
      setLoading(false);
      return Promise.reject("No authenticated user found.");
    }
  };


  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/user-profile/${user?.email}`)
        .then((res) => {
          const { role, status, photo } = res.data; 
          setRole(role);
          setPremium(status);
          setPhoto(photo)
        })
        .catch((error) => {
          console.error("Error checking user role:", error);
        });
    }
  },[user])

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
    updateUserProfile,
    role,
    premium,
    photo
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
