// import { useContext, useState } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import "./Register.css";
import logo from "../img/logo.svg";

export const Register = () => {


  return (

    <section>
      <div className="reg">
      <a href="http://localhost:3000/"><img className="logo" src={logo} alt="logo" /></a>
      <h1>Login</h1>
      <form onSubmit="">
      <div>
        <label htmlFor="name">First name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange=""
          value=""
        />
        </div>

        <div>
        <label htmlFor="surname">Last name</label>
        <input
          id="surname"
          name="surname"
          type="text"
          onChange=""
          value=""
        />
        </div>

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
      </div>
      <Footer/>
    </section>
 
  );
};
