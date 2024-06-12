import { Outlet, Link } from "react-router-dom";
import WacocoLogo from "../assets/WacocoLogo.jpg";
import style from './navbar.module.css'

function Navbar() {
    return (
        <div style={{backgroundColor: "#282c3d"}}>
            <nav className={style.wrapper}>
                <img src={WacocoLogo}
                    alt='Wallin Computer Consulting'
                    className={style.wacocoLogo}
                />
                <ul className={style.navLinks}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/meet-the-team">Meet the Team</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>

            </nav>
            <Outlet />
        </div>
 )
};

export default Navbar

