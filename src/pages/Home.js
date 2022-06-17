import { Navigate } from "react-router-dom";
import "./Home.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Workcards } from "../components/Workcards";
import { CgToolbox } from "react-icons/cg";
import { FiTool} from "react-icons/fi";

export const Home = () => {
  const boxstyle = { color: "white", fontSize: "3.5em" }
  const keystyle = { color: "white", fontSize: "3.5em" }


  return (
    <section className="home" >
      <Menu />
      <p>Find maintenance and <u>repair services</u> for your home</p>
      <Workcards/>
      <section className="post-ad">
          <p>Post an ad</p>
          <div className="ad-description">
          
          <p>Publica un anuncio para que contacten contigo. Publica un anuncio para que contacten contigo. 
          Publica un anuncio para que contacten contigo. Publica un anuncio para que contacten contigo. 
          Publica un anuncio para que contacten contigo
          </p>
          <a><CgToolbox style={boxstyle} /></a>
          </div>
      </section>
      <section className="box1">

      <div>
          <p id="p1">- Post your ad - </p>
          <p>- search your reapirer - </p>
          <p> - fix your home -</p>
      </div>
      </section>
      <Footer/>
    </section>

  );
};
