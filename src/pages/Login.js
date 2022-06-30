import { Footer } from "../components/Footer";
import "./Login.css";
import {useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {setId,setRole,setEmail,setFname,setLname,setToken,setRtoken} = useContext(AuthContext);


  const submit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data !== "Incorrect username or password") {
          setToken(data.token);
          setRtoken(data.refresh_token);
          setRole(data.role);
          setEmail(data.email);
          setFname(data.first_name);
          setLname(data.last_name);
          setId(data.id);
          setIsSubmitted(true);
        }
      });
 
  };
 
 
  const renderForm = (
    
    <div className="loginform" >
    <form onSubmit={submit}>
    <a href="http://localhost:3000/" ><div className="logo"></div></a>
      <div className="title">Sign In</div>
      <div className="input-container">
        <input
          type="email"
          name="useremail"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="input-container">
        <input
        autoComplete="off"
          type="password"
          name="userpassword"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="button-container">
        <input type="submit" name="Sign Up" />
      </div>
      <a href="http://localhost:3000/register" ><div className="register" >you are not registered?</div></a>
    </form>
    </div>
  );

  return (
    <section className="login">
 {isSubmitted ? <div className="logged">Successfully logged in!
        <button
          onClick={(e) => 
            {window.location.href = "http://localhost:3000/";}}
          >OK
        </button>
        </div> : renderForm} 
      <Footer />
    </section>
  );
};
