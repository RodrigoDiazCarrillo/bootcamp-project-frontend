import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { Dashboard } from "../components/Dashboard";
import {useContext, useEffect,useState } from "react";
import {Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faPen} from '@fortawesome/free-solid-svg-icons'

export const User = () => {
   

  return (
    <section className="my-user">
        <Menu/>
        <Dashboard/>
        
        <Footer />
    </section>
  );
};
