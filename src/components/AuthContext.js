import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [ fname, setFname ] = useState(localStorage.getItem("fname"));
  const [ lname, setLname ] = useState(localStorage.getItem("lname"));
  const [ role, setRole ] = useState(localStorage.getItem("role"));
  const [ email, setEmail ] = useState(localStorage.getItem("email"));
  const [ token, setToken] = useState(localStorage.getItem("token"));
  const [ rtoken, setRtoken] = useState(localStorage.getItem("refresh_token"));
  const [ id, setId] = useState(localStorage.getItem("id"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("fname", fname);
      localStorage.setItem("lname", lname);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);
      localStorage.setItem("token", token);
      localStorage.setItem("refresh_token", rtoken);
      localStorage.setItem("id", id);
      setId(id);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("id");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ 
      token, setToken, rtoken, setRtoken, role,setRole,email,setEmail,
      fname,setFname,lname,setLname,id,setId }}>
      {props.children}
    </AuthContext.Provider>
  );
};
