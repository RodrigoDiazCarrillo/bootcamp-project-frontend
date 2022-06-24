import logo from "../img/logo.svg";
import "./Footer.css";
import { BsFillSuitHeartFill, BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs";
import { BiMap,BiPhone,BiMailSend} from "react-icons/bi";


export const Footer = () => {
    const boxstyle = { color: "red"}
  return (
    <section id="footer">  
      <div className="imgfooter">
        <img id="logofooter" src={logo} alt="logo" />
        <p>Made with <BsFillSuitHeartFill style={boxstyle}/>  by Rodrigo Díaz</p>
      </div>
      <div>
          <p><strong>HomeFIX</strong></p>
          <a href="http://localhost:3000/about">About us</a>
          <div className="social">
            <a href="https://www.facebook.com/" target="_blank"><BsFacebook/></a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank"><BsInstagram/></a>
            <a href="https://twitter.com/i/flow/login" target="_blank"><BsTwitter/></a>
          </div>
      </div>
      <div>
          <p><strong>Contact info</strong></p>
          <p><BiMap/>&nbsp;HomeFIX,<br/>  801 Blairyhill Rd., Suite 000, Charlotte,<br/>  NC 28207, U.S.A.</p>
          <p><BiPhone/>&nbsp;900 000 000</p>
          <a href="mailto:info@homefix.com"><BiMailSend/>&nbsp;info@homefix.com</a>
      </div>
      <div>
          <p><strong>About</strong></p>
          <a href="http://localhost:3000">Sitemap</a>
          <a href="http://localhost:3000">Privacy Policies</a>
          <a href="http://localhost:3000">Terms and Conditions</a>
   
      </div>
    </section> 
  );
};
