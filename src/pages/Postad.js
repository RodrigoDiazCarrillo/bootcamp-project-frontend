import { Footer } from "../components/Footer";
import "./Postad.css";
import {useState, optionsState } from "react";


export const Postad = () => {
  const [ad, setAd] = useState({ user: "", category: "Electricity" , title: "", description: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);


  const submit = (e) => {
    
    console.log(ad);
    e.preventDefault();

    fetch("http://127.0.0.1:8000/ad/new", {
      method: "POST",
      body: JSON.stringify(ad),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data !== "Incorrect username or password") {
          setIsSubmitted(true);
        }
      });
  };
 
 
  const renderForm = (
    
    <div className="postbox">
    <form onSubmit={submit}>
    <a href="http://localhost:3000/" ><div className="logo"></div></a>
        
    <div className="title">Post ad</div>
    <div className="category">
    <p>Category</p>
    <select value={optionsState} onChange={(e) => setAd({ ...ad, category: e.target.value })} id="postselect">
            <option value="Electricity">Electricity</option>
            <option value="Painting">Painting</option>
            <option value="Technician">Technician</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Brickwork">Brickwork</option>
            <option value="Metalwork">Metalwork</option>
            <option value="Internet & lan">Internet & lan</option>
            <option value="Woodwork">Woodwork</option>
      </select>
      </div>
      <div className="input-container">
        <p>Email</p>
        <input
          type="email"
          name="useremail"
          required="required"
          onChange={(e) => setAd({ ...ad, user: e.target.value })}
        />
      </div>
      <div className="input-container">
        <p>Title</p>
        <input
          type="text"
          name="title"
          required="required"
          onChange={(e) => setAd({ ...ad, title: e.target.value })}
        />
      </div>
      <div className="input-container">
        <p>Description</p>
        <textarea
          type="text"
          name="description"
          required="required"
          onChange={(e) => setAd({ ...ad, description: e.target.value })}
        />
      </div>
      <div className="input-container">
        <p>Image</p>
        <input
          type="file"
          name="image"
          required="required"
          onChange={(e) => setAd({ ...ad, image:"image"})}
        />
      </div>
      <div className="button-container">
        <input type="submit" name="Publish" />
      </div>
    </form>
    </div>
  );

  return (
    <section className="ad">
   
        {isSubmitted ? <div className="registered">Submitted!
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
