import "./Menu.css";
import logo from '../img/logo.svg';
import { HiMenu } from "react-icons/hi";
import { FiUserX } from "react-icons/fi";

export const Menu = () => {
  let menustyle = { color: "white", fontSize: "2em" }
  let userstyle = { color: "red", fontSize: "1.5em" }
    return (
      <section className="menu">
       <a href="http://localhost:3000/" className="logo"></a>
        <div className="menubuttons">

          <div className="usericon"><FiUserX style={userstyle}/></div>
        <button
          onClick={(e) => {e.preventDefault();window.location.href = "http://localhost:3000/login"; }}
          className="loginbtn">LOG IN
        </button>
        <div class="dropdown">
        <button class="dropbtn"><HiMenu style={menustyle} /></button>
          <div class="dropdown-content">
            <a href="http://localhost:3000/search">About</a>
            <a href="http://localhost:3000/search">Search ads</a>
            <a href="http://localhost:3000/search">Post your ad</a>
          </div>
        </div>
        </div>
      </section>
    );
};