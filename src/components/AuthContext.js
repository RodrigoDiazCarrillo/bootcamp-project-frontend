import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [rtoken, setRtoken] = useState(localStorage.getItem("refresh_token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("refresh_token", rtoken);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken, rtoken, setRtoken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
