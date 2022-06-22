import "./Search.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

export const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ads, setAds] = useState("");

  useEffect(() => {
    setIsLoading(true);

    fetch("http://127.0.0.1:8000/ad", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setAds(data);
        console.log(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <section className="srch">
      <Menu />
      <div className="srchheader">
        <p className="srchtitle">
          Find maintenance and <u>repair services</u> for your home
        </p>
        <div className="srchselect">
          <p>Category</p>
          <select>
            <option>Electricity</option>
            <option>Painting</option>
            <option>Technician</option>
            <option>Plumbing</option>
            <option>Brickwork</option>
            <option>Metalwork</option>
            <option>Internet &amp; lan</option>
            <option>Woodwork</option>
          </select>
        </div>
      </div>
      <div className="cards">
      {Object.keys(ads).map(function (key) {
        return (<div className="card">
          <div>{ads[key].title}</div> 
          <div>{ads[key].image}</div> 
          <div>{ads[key].category}</div>
          <div>{ads[key].description}</div> 
        </div>)
      })}
      </div>
      <Footer />
    </section>
  );
};
