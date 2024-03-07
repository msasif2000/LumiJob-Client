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
import useAxiosPublic from "../hooks/useAxiosPublic";
import { auth } from "../config/Firebase.config";
import { useQuery } from "@tanstack/react-query";

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
  packages: any;
  name: any;

  userRefetch: () => void;
}

export const ThemeContext = createContext<ThemeInfo | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const [premium, setPremium] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [packages, setPackages] = useState(null);
  const axiosPublic = useAxiosPublic();
  const [name, setName] = useState("");

  const createUser = (email: string, password: string): Promise<any> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => userCredential.user
    );
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

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        //get token

        const useInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", useInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
        });
        setUser(currentUser);
        setLoading(false);
      } else {
        localStorage.removeItem("token");
        setUser(null);
        setLoading(false);
      }

      // console.log("Observed User:", currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [user, axiosPublic]);

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

  const { data: infos, refetch: userRefetch } = useQuery({
    queryKey: ["infos", user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user-profile/${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (infos) {
      setRole(infos?.role);
      setPremium(infos?.status);
      setPhoto(infos?.photo);
      setPackages(infos?.packages);
      setName(infos?.name);
    }
  }, [infos]);

  const logOut = async (): Promise<void> => {
    await signOut(auth);
    await userRefetch();
  };

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
    photo,
    packages,
    userRefetch,
    name,
  };

  return (
    <ThemeContext.Provider value={themeInfo}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
