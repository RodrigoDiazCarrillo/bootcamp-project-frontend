import { Footer } from "../components/Footer";
import "./Postad.css";
import { useState, optionsState , useContext} from "react";
import { AuthContext } from "../components/AuthContext";

export const Postad = () => {
  const email = useContext(AuthContext);
  const token = useContext(AuthContext);
  const [ad, setAd] = useState({
    user: email.email,
    category: "Electricity",
    title: "",
    description: "",
    image: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);  

  const submit = (e) => {
    setAd({ ...ad, user: email.email })
    e.preventDefault();
    console.log(ad);
      let reader = new FileReader();
      fetch("http://127.0.0.1:8000/ad/new", {
        method: "POST",
        body: JSON.stringify(ad),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if(data.status!="failed"){
            setIsSubmitted(true);
          }else{
            alert("You need to log in to post an add")
          }

        });
    
      
  };

  const renderForm = (
    <div className="postbox">
      <form onSubmit={submit}>
        <a href="http://localhost:3000/">
          <div className="logo"></div>
        </a>

        <div className="title">
          <h2>Post ad</h2>
          <p>
            Our courteous professionals work around your busy schedule and we
            never charge extra for Same Day Service, Evenings, and Saturday or
            Sunday appointments.
          </p>
        </div>
        <div className="category">
          <select
            value={optionsState}
            onChange={(e) => setAd({ ...ad, category: e.target.value })}
            id="postselect"
          >
           
            <option value="Electricity">Electricity</option>
            <option value="Painting">Painting</option>
            <option value="Technician">Technician</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Brickwork">Brickwork</option>
            <option value="Metalwork">Metalwork</option>
            <option value="Networks">Networks</option>
            <option value="Woodwork">Woodwork</option>
          </select>
        </div>
        <div className="input-container">
          <input
            placeholder="title"
            type="text"
            name="title"
            required="required"
            onChange={(e) => setAd({ ...ad, title: e.target.value })}
          />
        </div>
        <div className="input-container">
          <textarea
            placeholder="description"
            type="text"
            name="description"
            required="required"
            onChange={(e) => setAd({ ...ad, description: e.target.value })}
          />
        </div>
        
        <div className="container-input">
          <input
            type="file"
            name="file-1"
            id="file-1"
            className="inputfile inputfile-1"
            data-multiple-caption="{count} archivos seleccionados"
            required="required"
            onChange={(e) => setAd({ ...ad, image: "image"})}
            multiple
          />
          <label htmlFor="file-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="iborrainputfile"
              width="20"
              height="17"
              viewBox="0 0 20 17"
            >
              <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
            </svg>
            <span className="iborrainputfile">Select file</span>
          </label>
        </div>

        <div className="button-container">
          <input type="submit" name="Publish" />
        </div>
      </form>
    </div>
  );

  return (
    <section className="ad">
      {isSubmitted ? (
        <div className="registered">
          Submitted!
          <button
            onClick={(e) => {
              window.location.href = "http://localhost:3000/";
            }}
          >
            OK
          </button>
        </div>
      ) : (
        renderForm
      )}

      <Footer />
    </section>
  );
};
