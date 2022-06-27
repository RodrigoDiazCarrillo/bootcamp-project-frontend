import { Footer } from "../components/Footer";
import "./Register.css";
import {useState } from "react";


export const Register = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);


  const submit = (e) => {
    e.preventDefault();
    console.log(user);

    fetch("http://127.0.0.1:8000/login/new", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data !== "Incorrect username or password") {
          // setToken(data.token);
          // setRtoken(data.refresh_token);
          setIsSubmitted(true);
        }
      });
  };
 
 
  const renderForm = (
    
    <div className="regform">
    <form onSubmit={submit}>
    <a href="http://localhost:3000/" ><div className="logo"></div></a>
      <div className="title">Sign In</div>
      <div className="input-container">
        <p>Email</p>
        <input
          type="email"
          name="useremail"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="input-container">
        <p>Password</p>
        <input
          type="text"
          name="userpassword"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="input-container">
        <p>First name</p>
        <input
          type="text"
          name="first_name"
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
        />
      </div>
      <div className="input-container">
        <p>Last name</p>
        <input
          type="text"
          name="last_name"
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
        />
      </div>
      <div className="button-container">
        <input type="submit" name="Sign Up" />
      </div>
    </form>
    </div>
  );

  return (
    <section className="reg">
   
        {isSubmitted ? <div className="registered">User is successfully registered</div> : renderForm} 

      <Footer />
    </section>
  );
};
