import { Navigate } from "react-router-dom";
import "./Search.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Workcards } from "../components/Workcards";
import { CgToolbox } from "react-icons/cg";
import { FiTool} from "react-icons/fi";

export const Search = () => {
  const boxstyle = { color: "white", fontSize: "3.5em" }



  return (
    <section className="srch" >
      <Menu />
      <div className="srchheader">
      <div className="srchselect">
        <p>Category</p>
      <select>
            <option>Electricity</option>
            <option>Painting</option>
            <option>Technician</option>
            <option>Plumbing</option>
            <option>Brickwork</option>
            <option>Metalwork</option>
            <option>Internet & lan</option>
            <option>Woodwork</option>
      </select>
      </div>  
      <p className="srchtitle">Find maintenance and <u>repair services</u> for your home</p>
      </div>
      <hr></hr>
      <Footer/>
    </section>

  );
};
