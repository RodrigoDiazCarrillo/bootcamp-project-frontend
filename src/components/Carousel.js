import "./Carousel.css";
import img1 from "../img/carousel1.jpg";
import img2 from "../img/carousel2.jpg";
import img3 from "../img/carousel3.jpg";
import img4 from "../img/carousel4.jpg";
import img5 from "../img/carousel5.jpg";

export const Carousel = () => {
  return (
    <div class="pic-ctn">
      <div className="roller">
        <div>
          <h2>Brickwork</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <img src={img1} alt="" class="pic" />
      </div>
      <div className="roller">
        <div>
          <h2>Painting</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <img src={img2} alt="" class="pic" />
      </div>
      <div className="roller">
        <div>
          <h2>Networks</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <img src={img3} alt="" class="pic" />
      </div>
      <div className="roller">
        <div>
          <h2>Plumbing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <img src={img4} alt="" class="pic" />
      </div>
      <div className="roller">
        <div>
          <h2>Electricity</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <img src={img5} alt="" class="pic" />
      </div>
    </div>
  );
};
