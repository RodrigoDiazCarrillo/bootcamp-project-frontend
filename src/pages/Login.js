// import { useContext, useState } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import "./Login.css";
import logo from "../img/logo.svg";

export const Login = () => {


  return (

    <section>
      <div className="logbox">
      <a href="http://localhost:3000/"><img className="logo" src={logo} alt="logo" /></a>
      <h1>Login</h1>
      <form onSubmit="">
        <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange=""
          value=""
        />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange=""
          values=""
        />
        </div>
        <div>
        <button className="loginbtn" type="submit">Iniciar sesión</button>
        </div>
        
      </form>
      <a href="http://localhost:3000/register">you are not registered yet?</a>
      </div>
      <Footer/>
    </section>
 
  );
};
