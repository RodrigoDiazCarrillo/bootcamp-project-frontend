import { Footer } from "../components/Footer";
import "./About.css";
import logo from "../img/logo.svg";


export const About = () => {

  
   
  return (

    <section className="about">
      

      <a id="aboutlogo" href="http://localhost:3000/"><img className="logo" src={logo} alt="logo" /></a>
        <h2>Fix_4u is ​​the community that makes your life <u>easier</u></h2>

        <div className="tower"></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed dolor nisl, placerat vel quam ac, luctus blandit leo. 
          Nullam dignissim congue lectus non luctus. Nam nec elit consequat 
          </p>

        <h2>We help you find <u>professionals</u> in your city</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed dolor nisl, placerat vel quam ac, luctus blandit leo. 
          Nullam dignissim congue lectus non luctus. Nam nec elit consequat 
          sapien pharetra porttitor a non erat. Praesent varius malesuada 
          ultricies. Nam luctus a justo et imperdiet. Vivamus eget pellentesque 
          metus, vel molestie massa. Aliquam erat volutpat. 
          Sed convallis tristique metus, at faucibus elit tempus ut. Sed vitae 
          tempus ante. Quisque convallis viverra mi, convallis ullamcorper quam 
          ullamcorper in. Donec tempus justo a nibh auctor, et laoreet odio
           accumsan. Proin sed ante sit amet nulla porttitor tempus. Aliquam 
           id urna quam.</p>

           <h2>Fix_4u</h2>
          
          <p>Fix_4u is ​​a registered company:</p>
          <p>owner: John Doe</p>
          <p>Fix_4u,801 Blairyhill Rd., Suite 000, Charlotte,NC 28207, U.S.A.</p>
      <Footer/>
    </section>
 
  );
};
