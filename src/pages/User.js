import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
//import "./Login.css";
import {useContext } from "react";
import {Navigate } from "react-router-dom";

import { AuthContext } from "../components/AuthContext";

export const User = () => {
    const { token } = useContext(AuthContext);
    const { role } = useContext(AuthContext);
    
    //Admin dashboard
    const admin=(
        <div className="main-admin">
        <h2>{localStorage.fname} {localStorage.lname}</h2>
        <p>email: {localStorage.email}</p>
        

        </div>
    )
    //User dashboard
    const dashboard=(
        role===1 ?
        <div className="main">
        <h2>{localStorage.fname} {localStorage.lname}</h2>
        <p>email: {localStorage.email}</p>
        

        </div>
        : admin
    );
    

  return (
    <section className="my-user">
        <Menu/>
        {/* If the user is not logged in, it returns to the home page. */}
        {token ? dashboard : <Navigate to="/" replace />}
        
        <Footer />
    </section>
  );
};
