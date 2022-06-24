import "./Search.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { useEffect, useState,useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ads, setAds] = useState("");
  const  token  = useContext(AuthContext);
  useEffect(() => {
    setIsLoading(true);

    fetch("http://127.0.0.1:8000/ad", {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
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
  const rendercards =(
    <div className="cards">
    {Object.keys(ads).map(function (key) {
      return (<div className="card">
        <div className="image"></div> 
        <div className="category">{ads[key].category}</div>
        <div className="title">{ads[key].title}</div> 
        <div className="description">{ads[key].description}</div> 
      </div>)
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
     {isLoading ? <div className="lds-roller"><div></div><div></div><div>
       </div><div></div><div></div><div></div><div></div>
       <div></div></div> : rendercards}
      <Footer />
    </section>
  );
};
