import "./Search.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ads, setAds] = useState("");
  const token = useContext(AuthContext);
  useEffect(() => {
    setIsLoading(true);

    fetch("http://127.0.0.1:8000/ad", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAds(data);
        console.log(data);
        setIsLoading(false);
      });
  }, []);

  //Cards structure
  const rendercards = (
    <div className="cards">
      {Object.keys(ads).map(function (key) {
        return (
          <div className="card">
            <div className="image"></div>
            <div className="category">{ads[key].category}</div>
            <div className="title">{ads[key].title}</div>
            <div className="description">{ads[key].description}</div>
            <button className="contactbtn" onClick={() => window.location = `mailto:${ads[key].temail}`}>
              <span >Contact Me</span></button>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="srch">
      <Menu />
      <div className="srchheader">
        <p className="srchtitle">
          Find maintenance and <u>repair services</u> for your home
        </p>
        <div className="srchselect">
          <form class="form">
            <div class="switch-field">
              <input type="radio" id="radio-one" name="radio-categories" value="Electricity"/>
              <label for="radio-one">Electricity</label>
              <input type="radio" id="radio-two" name="radio-categories" value="Painting"/>
              <label for="radio-two">Painting</label>
              <input type="radio" id="radio-three" name="radio-categories" value="Technician"/>
              <label for="radio-three">Technician</label>
              <input type="radio" id="radio-four" name="radio-categories" value="Plumbing"/>
              <label for="radio-four">Plumbing</label>
              <input type="radio" id="radio-five" name="radio-categories" value="Brickwork"/>
              <label for="radio-five">Brickwork</label>
              <input type="radio" id="radio-six" name="radio-categories" value="Metalwork"/>
              <label for="radio-six">Metalwork</label>
              <input type="radio" id="radio-seven" name="radio-categories" value="Internet"/>
              <label for="radio-seven">Internet </label>
              <input type="radio" id="radio-eight" name="radio-categories" value="Woodwork0."/>
              <label for="radio-eight">Woodwork</label>
            </div>
          </form>
        </div>
      </div>
      {isLoading ? (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        rendercards
      )}
      <Footer />
    </section>
  );
};
