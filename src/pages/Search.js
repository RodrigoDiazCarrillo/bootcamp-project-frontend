import "./Search.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export const Search = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ads, setAds] = useState("");
  const token = useContext(AuthContext);
  const [filters, setFilters] = useState([]);
  
  const selected = {color: "white", backgroundColor: "rgb(10, 191, 131)", border: "none"}
  const unselected = {color: "white", backgroundColor: "rgb(79, 93, 115)", border: "none"}
  const [elcolor, setElcolor] = useState(unselected);
  const [pacolor, setPacolor] = useState(unselected);
  const [tecolor, setTecolor] = useState(unselected);
  const [plcolor, setPlcolor] = useState(unselected);
  const [brcolor, setBrcolor] = useState(unselected);
  const [mecolor, setMecolor] = useState(unselected);
  const [incolor, setIncolor] = useState(unselected);
  const [wocolor, setWocolor] = useState(unselected);
  
  useEffect(() => {
 
    fetch("http://127.0.0.1:8000/ad", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.status!="failed"){
          setIsLoading(false);
          setAds(data);
          console.log(data);
        }
      });
  }, [isLoading]);
  
  useEffect(() => {
    console.log(filters);
    if ("Electricity"=== filters.find((element) => element === "Electricity")) {
      setElcolor(selected);
    }else{setElcolor(unselected);}
    if ("Painting"=== filters.find((element) => element === "Painting")) {
      setPacolor(selected);
    }else{setPacolor(unselected);}
    if ("Technician"=== filters.find((element) => element === "Technician")) {
      setTecolor(selected);
    }else{setTecolor(unselected);}
    if ("Plumbing"=== filters.find((element) => element === "Plumbing")) {
      setPlcolor(selected);
    }else{setPlcolor(unselected);}
    if ("Brickwork"=== filters.find((element) => element === "Brickwork")) {
      setBrcolor(selected);
    }else{setBrcolor(unselected);}
    if ("Metalwork"=== filters.find((element) => element === "Metalwork")) {
      setMecolor(selected);
    }else{setMecolor(unselected);}
    if ("Networks"=== filters.find((element) => element === "Networks")) {
      setIncolor(selected);
    }else{setIncolor(unselected);}
    if ("Woodwork"=== filters.find((element) => element === "Woodwork")) {
      setWocolor(selected);
    }else{setWocolor(unselected);}
  }, [filters]);

  const roller =(
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
  );
  function handleClick(e) {
    if (undefined === filters.find((element) => element === e.target.name)) {
      setFilters([...filters, e.target.name]);
    } else {
      let newfilters = filters.filter((filter) => filter !== e.target.name);
      setFilters(newfilters);
    }
  }
  
  const rendercards = (
    
    <div className="cards">
         <Menu />
      <div className="srchheader">
      <div className="ads_title">
        <div className="title"> Search...<div className="subtitle">Search...</div></div> 
      </div>
        <div className="categories">

          <button name="Electricity" style={elcolor} onClick={handleClick}>
            Electricity
          </button>
            <button name="Painting" style={pacolor} onClick={handleClick}>
            Painting
          </button>
          <button name="Technician" style={tecolor} onClick={handleClick}>
            Technician
          </button>
          <button name="Plumbing" style={plcolor} onClick={handleClick}>
            Plumbing
          </button>
          <button name="Brickwork" style={brcolor} onClick={handleClick}>
            Brickwork
          </button>
          <button name="Metalwork" style={mecolor} onClick={handleClick}>
            Metalwork
          </button>
          <button name="Networks" style={incolor} onClick={handleClick}>
            Networks
          </button>
          <button name="Woodwork" style={wocolor} onClick={handleClick}>
            Woodwork
          </button>
        </div>
      </div>
      {!isLoading &&
        ads.map(function (ad, index) {
          //console.log(filters.find(element => element === ad.category))
          if (filters.length > 0) {
            if (
              undefined !== filters.find((element) => element === ad.category)
            ) {
              return (
                <div className="card" key={index}>
                  <div className="image"></div>
                  <div className="category">{ad.category}</div>
                  <div className="cardtitle">{ad.title}</div>
                  <div className="description">{ad.description}</div>
                  <button className="contactbtn">
                    <span>Contact Me</span>
                  </button>
                </div>
              );
            }
          } else {
            return (
              <div className="card" key={index}>
                <div className="image"></div>
                <div className="category">{ad.category}</div>
                <div className="cardtitle">{ad.title}</div>
                  <div className="description">{ad.description}</div>
                <button className="contactbtn">
                  <span>Contact Me</span>
                </button>
              </div>
            );
          }
        }

        )}
         <Footer />
    </div>
    
  );
 



  return (
    <section className="srch">
      {!token.token ? (

        <div className="needlog">
        You need to log in to access ads
        <button onClick={(e) => {window.location.href = "http://localhost:3000/";}}
          >OK</button>
        </div>

      ) : (
        rendercards
      )}
     
    </section>
  );
};
