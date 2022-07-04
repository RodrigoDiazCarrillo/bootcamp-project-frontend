import "./Menu.css";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { HiMenu } from "react-icons/hi";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassArrowRight,
  faBookOpen,
  faSquarePlus,
  faUserLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";

export const Menu = () => {
  const { token } = useContext(AuthContext);
  let menustyle = { color: "white", fontSize: "2em" };
  let checkicon = { color: "green", fontSize: "1.5em" };
  let xicon = { color: "red", fontSize: "1.5em" };
  let telicon = { color: "green", fontSize: ".7em" };

  return (
    <section className="menu">
      <a href="http://localhost:3000/" className="logo">
        <div></div>
      </a>
      <div className="menubuttons">
        <div className="telephone">
          <p className="title">Need Help now? Call us!</p>
          <p className="number">
            <BsFillTelephoneFill style={telicon} /> 900-000-000
          </p>
        </div>
        <div className="usericon">
          {token ? (
            <FiUserCheck style={checkicon} />
          ) : (
            <FiUserX style={xicon} />
          )}
        </div>
        {token ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              alert("Successfully logged out");
              localStorage.clear();
              window.location.href = "http://localhost:3000";
            }}
            className="loginbtn"
          >
            LOG OUT
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/login";
            }}
            className="loginbtn"
          >
            LOG IN
          </button>
        )}
        <div className="dropdown">
          <button className="dropbtn">
            <HiMenu style={menustyle} />
          </button>
          <div className="dropdown-content">
          <div className="social">
              <h2>Follow us</h2>
                  <div>
                    <a href="https://www.facebook.com/" target="_blank"><BsFacebook/></a>
                    <a href="https://www.instagram.com/accounts/login/" target="_blank"><BsInstagram/></a>
                    <a href="https://twitter.com/i/flow/login" target="_blank"><BsTwitter/></a>
                  </div>
                </div>
              <div className="droplogo"></div>
              <a href="http://localhost:3000/about">
                <i>
                  <FontAwesomeIcon icon={faBookOpen} />
                </i>
                About
              </a>
              <a href="http://localhost:3000/search">
                <i>
                  <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />
                </i>
                Search ads
              </a>
              <a href="http://localhost:3000/postad">
                <i>
                  <FontAwesomeIcon icon={faSquarePlus} />
                </i>
                Post your ad
              </a>
              {token ? (
                <a href="http://localhost:3000/user">
                  <FontAwesomeIcon icon={faUserLock} />
                  My user
                </a>
              ) : (
                <p className="user-logout">
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                  My user
                </p>
              )}

              <div className="contact">
                <h2>Our contacts</h2>
                <div>
                  <h3>Head office</h3>
                  <p>8439 Hoffman Alley, VA</p>
                </div>
                <div>
                  <h3>Phone number</h3>
                  <p>900-000-000</p>
                </div>
                <div>
                  <h3>Service</h3>
                  <p>24 Hour Service - 7 Days a Week 365 Days</p>
                </div>
              </div>
             
              
            
          </div>
        </div>
      </div>
    </section>
  );
};
