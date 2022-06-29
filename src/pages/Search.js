import "./Search.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ads, setAds] = useState("");
  const token = useContext(AuthContext);
  const filters =[];
  
  useEffect(() => {
    console.log(token);
    fetch("http://127.0.0.1:8000/ad", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
          setAds(data);
          console.log(data);    
          setIsLoading(false);
      });
  }, [isLoading]);
  //Cards structure
  const rendercards = (
    <div className="cards">

      {!isLoading && ads.map(function (ad,index) {
        //console.log(filters.find(element => element === ad.category))
        return (
          <div className="card" key={index}>
            <div className="image"></div>
            <div className="category">{ad.category}</div>
            <button className="contactbtn" >
              <span >Contact Me</span></button>
          </div>
     
        );
      })}
    </div>
  );
  function handleClick (e){
    filters.push(e.target.name);
    console.log(filters);
    const found = filters.find(element => element === e.target.name);  
    console.log("found:"+found);
  }

  return (
    <section className="srch">
      <Menu />
      <div className="srchheader">
        <p className="srchtitle">
          Find maintenance and <u>repair services</u> for your home
        </p>
      <div className="categories">
        <button name="Electricity" onClick={handleClick}>Electricity</button>
        <button name="Painting" onClick={handleClick}>Painting</button>
        <button name="Technician" onClick={handleClick}>Technician</button>
        <button name="Plumbing" onClick={handleClick}>Plumbing</button>
        <button name="Brickwork" onClick={handleClick}>Brickwork</button>
        <button name="Metalwork" onClick={handleClick}>Metalwork</button>
        <button name="Internet" onClick={handleClick}>Internet</button>
        <button name="Woodwork" onClick={handleClick}>Woodwork</button>
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
