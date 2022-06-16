import "./Menu.css";
import logo from '../img/logo_manitas.svg';

export const Menu = () => {

    return (
        <section className="menu">
            <img src={logo} className="logo" alt="logo" />
            <ul>
                <li><a href="#a">Home</a></li>
                <li><a href="#a">News</a></li>
                <li><a href="#a">Contact</a></li>
                <li><a href="#a">About</a></li>
            </ul>
            <button className="loginbtn">LOG IN</button>
        </section>
    );
};