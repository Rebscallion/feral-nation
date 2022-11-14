import logoImg from '../img/logo.png';

// import linking from react-router
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div id="footer">
            <div id="contact">
                <h3>Contact</h3>
                <hr></hr>
                <Link to="/contact"><p>Contact Us</p></Link>
                <Link to="/contact"><p>meow@feralnation.org.nz</p></Link>
            </div>
            <div id="events">
                <h3>Events</h3>
                <hr></hr>
                <Link to="/events"><p>Upcoming</p></Link>
            </div>
            <div id="about">
                <h3>About</h3>
                <hr></hr>
                <Link to="/about"><p>Adoption Process</p></Link>
                <Link to="/apply"><p>Apply to Adopt</p></Link>
            </div>
            <div id="donate">
                <h3>Donate</h3>
                <hr></hr>
                <Link to="/donate"><p id="donate-bttn">Give a Little</p></Link>
                <p>Bank Details</p>
            </div>
            <div id="logo-box">
                <img src={logoImg} alt="logo-img"></img>
                <Link to="/"><h3>Home</h3></Link>
            </div>
        </div>
    )
}

export default Footer