import logo from "../img/logo.svg";
import "./Footer.css";
import { BsFillSuitHeartFill} from "react-icons/bs";
import { BiMap,BiPhone,BiMailSend } from "react-icons/bi";

export const Footer = () => {
    const boxstyle = { color: "red"}
  return (
    <section id="footer">
      <div className="imgfooter">
        <img className="logo" src={logo} alt="logo" />
        <p>Made with <BsFillSuitHeartFill style={boxstyle}/>  by Rodrigo Díaz</p>
      </div>
      <div>
          <p><strong>HomeFIX</strong></p>
          <a>&nbsp;</a>
          <a>About us</a>
          <a>&nbsp;</a>
          <a>How does it work</a>
      </div>
      <div>
          <p><strong>Contact info</strong></p>
          <p><BiMap/>&nbsp;HomeFIX,<br/>  801 Blairyhill Rd., Suite 000, Charlotte,<br/>  NC 28207, U.S.A.</p>
          <p><BiPhone/>&nbsp;900 000 000</p>
          <a href="mailto:info@homefix.com"><BiMailSend/>&nbsp;info@homefix.com</a>
      </div>
      <div>
          <p><strong>About</strong></p>
          <a>&nbsp;</a>
          <a>Sitemap</a>
          <a>&nbsp;</a>
          <a>Privacy Policies</a>
          <a>&nbsp;</a>
          <a>Terms and Conditions</a>
          <a></a>
      </div>
    </section>
  );
};
