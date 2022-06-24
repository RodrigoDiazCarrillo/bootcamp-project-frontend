import "./Menu.css";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { HiMenu } from "react-icons/hi";
import { FiUserX, FiUserCheck } from "react-icons/fi";

export const Menu = () => {
  const { token } = useContext(AuthContext);
  let menustyle = { color: "white", fontSize: "2em" }
  let checkicon = { color: "green", fontSize: "1.5em" }
  let xicon = { color: "red", fontSize: "1.5em" }
    return (
      <section className="menu">
       <a href="http://localhost:3000/" className="logo"><div></div></a>
        <div className="menubuttons">

          <div className="usericon">
          {token ? <FiUserCheck style={checkicon}/> : <FiUserX style={xicon}/>}
              </div>
        {token ? <button
          onClick={(e) => {localStorage.clear();window.location.href = "http://localhost:3000/"; }}
          className="loginbtn">LOG OUT
        </button> :
        <button onClick={(e) => {e.preventDefault();window.location.href = "http://localhost:3000/login"; }}
        className="loginbtn">LOG IN
      </button>
      }
        <div className="dropdown">
        <button className="dropbtn"><HiMenu style={menustyle} /></button>
          <div className="dropdown-content">
            <a href="http://localhost:3000/about">About</a>
            <a href="http://localhost:3000/search">Search ads</a>
            <a href="http://localhost:3000/postad">Post your ad</a>
            {token ? <a href="http://localhost:3000/user">My user</a> :<p className="user-logout">My user</p>}
          </div>
        </div>
        </div>
      </section>
    );
};