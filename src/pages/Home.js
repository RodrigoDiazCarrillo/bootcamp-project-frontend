import { Navigate } from "react-router-dom";
import "./Home.css";
import { Menu } from "../components/Menu";
import { GiElectric,GiBrickWall,GiAnvil,GiHandSaw } from "react-icons/gi";
import { AiFillFormatPainter } from "react-icons/ai";
import { FaScrewdriver } from "react-icons/fa";
import { MdPlumbing,MdLanguage } from "react-icons/md";

export const Home = () => {

  return (
    <section className="home" >
      <Menu />
      <p>Encuentra un manitas para cualquier situación</p>
      <section className="works">
      <div>
      <div className="electricity">
        <a className="stlIcon"><GiElectric/></a>
        <p className="stlTitle">Electricity</p>
      </div>
      <div className="painting"><a className="stlIcon">
        <AiFillFormatPainter/></a>
        <p className="stlTitle">Painting</p>
      </div>
      <div className="technic">
        <a className="stlIcon"><FaScrewdriver/></a>
        <p className="stlTitle">Technician</p>
      </div>
      <div className="plumbing">
        <a className="stlIcon"><MdPlumbing/></a>
        <p className="stlTitle">Plumbing</p>
      </div>
      </div>
      <div>
      <div className="brick">
        <a className="stlIcon"><GiBrickWall/></a>
        <p className="stlTitle">Brickwork</p>
      </div>
      <div className="metal">
        <a className="stlIcon"><GiAnvil/></a>
        <p className="stlTitle">Metalwork</p>
      </div>
      <div className="internet">
        <a className="stlIcon"><MdLanguage/></a>
        <p className="stlTitle">Internet & lan</p>
      </div>
      <div className="wood">
        <a className="stlIcon"><GiHandSaw/></a>
        <p className="stlTitle">Woodwork</p>
      </div>
      </div>
      </section>

    </section>

  );
};