import "./Menu.css";
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom'

export const Menu = () => {

    return (
      <section className="menu">
        <img className="logo" src={logo}alt="logo" />
        <ul>
          <li>
            <a href="#a">Home</a>
          </li>
          <li>
            <a href="#a">News</a>
          </li>
          <li>
            <a href="#a">Contact</a>
          </li>
          <li>
            <a href="#a">About</a>
          </li>
        </ul>
        {/* <a href="https://es-es.facebook.com/" className="loginbtn">LOG IN</a> */}
        <button
          onClick={(e) => {e.preventDefault();window.location.href = "http://localhost:3000/login"; }}
          className="loginbtn">LOG IN
        </button>
      </section>
    );
};