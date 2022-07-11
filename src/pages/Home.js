import "./Home.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Workcards } from "../components/Workcards";
import { Carousel, Titleslide } from "../components/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import Robot from '../img/robot.svg';
export const Home = () => {


  return (
    <section className="home">
      <Menu />

      <Carousel />
      
      <div className="ad_title">
        <div className="title"> Search ads<div className="subtitle">Search ads</div></div> 
      </div>
      
      <Workcards />
      <div className="ad_title">
        <div className="title"> Post an ad<div className="subtitle">Post an ad</div></div> 
      </div>
      <section className="post-ad">
        
        <div className="titleslider">
          <p>
            Find maintenance and <u>repair services</u>
          </p>
          <p>
            Offer your services as a <u>professional</u>
          </p>
          <p>
            Painting, electricity, plumbing, <u>wood work</u>...
          </p>
          </div>
        <button onClick={(e) => 
            {window.location.href = "http://localhost:3000/postad";}}
            className="postad_btn"><FontAwesomeIcon icon={faPlus} /></button>
        
      </section>
      
      <section className="guarantee">
      <div className="ad_title">
        <div className="title"> Satisfaction<div className="subtitle">Guarantee</div></div> 
      </div>
      <div className="guarantee-logo"></div>
      <div className="bg"><img src={Robot} ></img></div>
      <div className="guarantee-text">
        <h2>User protection</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum pulvinar mi ac feugiat sodales. Integer eget ex eleifend, 
          laoreet tellus non, condimentum ex.  </p>
        <ul>
          <li><FontAwesomeIcon icon={faCircleArrowRight} /> Guarantee service 24/7</li>
          <li><FontAwesomeIcon icon={faCircleArrowRight} /> Repair insurance</li>
        </ul>
      
      </div>
      </section>
      <Footer />
    </section>
  );
};
