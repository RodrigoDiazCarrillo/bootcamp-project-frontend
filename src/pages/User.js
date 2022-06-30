import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import {useContext} from "react";
import { Admindashboard } from "../components/Admindashboard";
import { Userdashboard } from "../components/Userdashboard";
import { AuthContext } from "../components/AuthContext";


export const User = () => {
  const {role} = useContext(AuthContext);
  return (
    <section className="my-user">
        <Menu/>
        {role>0 ? <Userdashboard/>: <Admindashboard/>}
        <Footer />
    </section>
  );
};
