import "./Home.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Workcards } from "../components/Workcards";
import { Carousel, Titleslide } from "../components/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox,faHandPointUp} from '@fortawesome/free-solid-svg-icons';
export const Home = () => {


  return (
    <section className="home">
      <Menu />
      <Titleslide />
      <Carousel />
      <p>
        Search <u>ads</u>
      </p>
      <Workcards />
      <section className="post-ad">
        <h2>Post an ad</h2>
        <p>
          post your <u>ad</u>, indicate what you want to <u>repair</u>
          &nbsp; and find an <u>expert</u>
        </p>
        <div className="icons">
        <a href="http://localhost:3000/postad"><FontAwesomeIcon className="boxicon"icon={faToolbox } size="2x"/></a>
        <FontAwesomeIcon className="handicon"icon={faHandPointUp } size="2x"/>
        </div>
      </section>
      <section className="box1">
        <div>
            <p> - Post your ad - Search your reapirer - Fix your home - </p>
        </div>
      </section>
      <Footer />
    </section>
  );
};
