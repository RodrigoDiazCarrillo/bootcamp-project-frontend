import "./Menu.css";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { HiMenu } from "react-icons/hi";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Menu = () => {
  const { token } = useContext(AuthContext);
  let menustyle = { color: "white", fontSize: "2em" }
  let checkicon = { color: "green", fontSize: "1.5em" }
  let xicon = { color: "red", fontSize: "1.5em" }
  let telicon = { color: "green", fontSize: ".7em" }
  
  function sayHello() {
    return(
    <div className="logged">Successfully logged in!
                <button
                  onClick={(e) => 
                    {window.location.href = "http://localhost:3000/";}}
                  >OK
                </button>
                </div>
    )
  }
    return (
      <section className="menu">
       <a href="http://localhost:3000/" className="logo"><div></div></a>
        <div className="menubuttons">
          <div className="telephone">
            <p className="title">Need Help now? Call us!</p>
            <p className="number"><BsFillTelephoneFill style={telicon}/> 900-000-000</p>
          </div>
          <div className="usericon">
          {token ? <FiUserCheck style={checkicon}/> : <FiUserX style={xicon}/>}
              </div>
        {token ? <button
          onClick={(e) => {
            e.preventDefault();
            alert("Successfully logged out");
            localStorage.clear();
            window.location.href = "http://localhost:3000"; 
          }}
          className="loginbtn">LOG OUT
        </button> : 
        <button onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/login"; 
        }}
        className="loginbtn">LOG IN
      </button>
      }
        <div className="dropdown">
        <button className="dropbtn"><HiMenu style={menustyle} /></button>
          <div className="dropdown-content">
            <div>
            <a href="http://localhost:3000/" className="logo"><div></div></a>
            <a href="http://localhost:3000/about">About</a>
            <a href="http://localhost:3000/search">Search ads</a>
            <a href="http://localhost:3000/postad">Post your ad</a>
            {token ? <a href="http://localhost:3000/user">My user</a> :<p className="user-logout">My user</p>}
            </div>
          </div>
        </div>
        </div>
      </section>
    );
};