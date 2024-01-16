import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const useAuth: () => React.ContextType<typeof ThemeContext> = () => {
  const auth = useContext(ThemeContext);
  return auth;
};

export default useAuth;
