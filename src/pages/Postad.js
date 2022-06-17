// import { useContext, useState } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import "./Postad.css";
import logo from "../img/logo.svg";

export const Postad = () => {


  return (

    <section>
      <a href="http://localhost:3000/"><img className="logo" src={logo} alt="logo" /></a>
      <div className="postbox">
      
      <h1>Post your add</h1>
      <form onSubmit="">
      <p>Category</p>
      <select id="postselect">
            <option>Electricity</option>
            <option>Painting</option>
            <option>Technician</option>
            <option>Plumbing</option>
            <option>Brickwork</option>
            <option>Metalwork</option>
            <option>Internet & lan</option>
            <option>Woodwork</option>
      </select>
      <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="title"
          onChange=""
          value=""
        />
      <p>Description</p>
      <textarea id="ad-description">
            description...
      </textarea>
      Ingresa el archivo:

      <input className="loadimage" name="imagen" type="file" />
        
        <div>
        <button className="loginbtn" type="submit">Iniciar sesión</button>
        </div>
        
      </form>

      </div>
      <Footer/>
    </section>
 
  );
};
