import "./Search.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

export const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ads, setAds] = useState("");

  useEffect(() => {
    
      setIsLoading(true);
   
      fetch("http://127.0.0.1:8000/ad",{
      method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setAds(data);
        console.log(data);
       
        setIsLoading(false);
       
      });
      
    
  },
  []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }


  return (
    <section className="srch" >
      <Menu />
      <div className="srchheader">
      <div className="srchselect">
        <p>Category</p>
      <select>
            <option>Electricity</option>
            <option>Painting</option>
            <option>Technician</option>
            <option>Plumbing</option>
            <option>Brickwork</option>
            <option>Metalwork</option>
            <option>Internet & lan</option>
            <option>Woodwork</option>
      </select>
      </div>  
      <p className="srchtitle">Find maintenance and <u>repair services</u> for your home</p>
      </div>
      <hr></hr>

    
         { console.log(ads[1])}
         
        

      <Footer/>
    </section>

  );
};
