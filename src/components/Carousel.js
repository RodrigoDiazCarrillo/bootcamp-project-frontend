import "./Carousel.css";
import img1 from "../img/carousel1.jpg";
import img2 from "../img/carousel2.jpg";
import img3 from "../img/carousel3.jpg";
import img4 from "../img/carousel4.jpg";
import img5 from "../img/carousel5.jpg";


export const Carousel = () => {

  return (
    <div class="pic-ctn">
    <img src={img1} alt="" class="pic"/>
    <img src={img2} alt="" class="pic"/>
    <img src={img3} alt="" class="pic"/>
    <img src={img4} alt="" class="pic"/>
    <img src={img5} alt="" class="pic"/>
  </div>
  );
};
export const Titleslide = () => {

  return (
    <div class="titleslider">
      <p>Find maintenance and <u>repair services</u></p>
      <p>Offer your services as a <u>professional</u></p>
      <p>Painting, electricity, plumbing, <u>wood work</u>...</p>
  </div>
  );
};