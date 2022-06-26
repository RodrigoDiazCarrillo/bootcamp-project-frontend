
import "./Home.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Workcards } from "../components/Workcards";
import { CgToolbox } from "react-icons/cg";
import { Carousel, Titleslide } from "../components/Carousel";


export const Home = () => {
  let boxstyle = { color: "white", fontSize: "3.5em" }



  return (
    <section className="home" >
      <Menu />
    <Titleslide/>
      <Carousel/>
      <p>Search <u>ads</u></p>
      <Workcards/>
      <section className="post-ad">
          <h2>Post an ad</h2>         
          <p>
            post your <u>ad</u>, 
           indicate what you want to <u>repair</u> 
             &nbsp; and find an <u>expert</u>
          </p>
          <a href="http://localhost:3000/postad"><CgToolbox style={boxstyle} /></a>

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
