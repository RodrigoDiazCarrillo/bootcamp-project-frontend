import { Navigate } from "react-router-dom";
import "./Workcards.css";
import { GiElectric,GiBrickWall,GiAnvil,GiHandSaw } from "react-icons/gi";
import { AiFillFormatPainter } from "react-icons/ai";
import { FaScrewdriver } from "react-icons/fa";
import { MdPlumbing,MdLanguage } from "react-icons/md";

export const Workcards = () => {



  return (

      <section className="works">
      <div>
   
      <a  href="http://localhost:3000/search" onMouseEnter={() => {document.getElementById("electitle").className = "stlTitlehover" 
            document.getElementById("elecicon").className = "stlIconhover"
  
          }}
            onMouseLeave={() => {document.getElementById("electitle").className = "stlTitle"
            document.getElementById("elecicon").className = "stlIcon"}}
            className="electricity">
        <a id="elecicon" className="stlIcon"><GiElectric/></a>
        <p id="electitle" className="stlTitle">Electricity</p>
      </a>

      <a href="http://localhost:3000/search" onMouseEnter={() => {document.getElementById("painttitle").className = "stlTitlehover"
            document.getElementById("painticon").className = "stlIconhover"}}
            onMouseLeave={() => {document.getElementById("painttitle").className = "stlTitle"
            document.getElementById("painticon").className = "stlIcon"}}
            className="painting">
        <a id="painticon" className="stlIcon"><AiFillFormatPainter/></a>
        <p id="painttitle" className="stlTitle">Painting</p>
      </a>
      <a href="http://localhost:3000/search" onMouseEnter={() => {document.getElementById("tectitle").className = "stlTitlehover"
            document.getElementById("tecicon").className = "stlIconhover"}}
            onMouseLeave={() => {document.getElementById("tectitle").className = "stlTitle"
            document.getElementById("tecicon").className = "stlIcon"}}
            className="technic">
        <a id="tecicon" className="stlIcon"><FaScrewdriver/></a>
        <p id="tectitle" className="stlTitle">Technician</p>
      </a>
      <a href="http://localhost:3000/search" onMouseEnter={() => {document.getElementById("plumbtitle").className = "stlTitlehover"
          document.getElementById("plumbicon").className = "stlIconhover"}}
            onMouseLeave={() => {document.getElementById("plumbtitle").className = "stlTitle"
            document.getElementById("plumbicon").className = "stlIcon"}}
            className="plumbing">
        <a id="plumbicon" className="stlIcon"><MdPlumbing/></a>
        <p id="plumbtitle" className="stlTitle">Plumbing</p>
      </a>
      </div>
      <div>
      <a href="http://localhost:3000/search" onMouseEnter={() => {document.getElementById("bricktitle").className = "stlTitlehover"
      document.getElementById("brickicon").className = "stlIconhover"}}
            onMouseLeave={() => {document.getElementById("bricktitle").className = "stlTitle"
            document.getElementById("brickicon").className = "stlIcon"}}
            className="brick">
        <a id="brickicon" className="stlIcon"><GiBrickWall/></a>
        <p id="bricktitle" className="stlTitle">Brickwork</p>
      </a>
      <a href="http://localhost:3000/search" onMouseEnter={() => {document.getElementById("mettitle").className = "stlTitlehover"
            document.getElementById("metticon").className = "stlIconhover"}}
            onMouseLeave={() => {document.getElementById("mettitle").className = "stlTitle"
            document.getElementById("metticon").className = "stlIcon"}}
            className="metal">
        <a id="metticon" className="stlIcon"><GiAnvil/></a>
        <p id="mettitle" className="stlTitle">Metalwork</p>
      </a>
      <a href="http://localhost:3000/search" onMouseEnter={() => {document.getElementById("inttitle").className = "stlTitlehover"
            document.getElementById("inticon").className = "stlIconhover"}}
            onMouseLeave={() => {document.getElementById("inttitle").className = "stlTitle"
            document.getElementById("inticon").className = "stlIcon"}}
            className="internet">
        <a id="inticon" className="stlIcon"><MdLanguage/></a>
        <p id="inttitle" className="stlTitle">Networks</p>
      </a>
      <a href="http://localhost:3000/search" onMouseEnter={() => {document.getElementById("woodtitle").className = "stlTitlehover"
      document.getElementById("woodicon").className = "stlIconhover"}}
            onMouseLeave={() => {document.getElementById("woodtitle").className = "stlTitle"
            document.getElementById("woodicon").className = "stlIcon"}}
            className="wood">
        <a id="woodicon" className="stlIcon"><GiHandSaw/></a>
        <p id="woodtitle" className="stlTitle">Woodwork</p>
      </a>
      </div>
      </section>


  );
};
