import { ThreeDotsVertical, CaretDownFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import logoImg from '../img/logo.png';

// import linking from react-router
import { Link } from "react-router-dom"

const Navbar = () => {
    const [MenuIsOpen, openMenu] = useState(false)

    const toggleMobileMenu = () => {
        // exclamation mark inverts a boolean value
        openMenu(!MenuIsOpen)
    }

    return (
        <>
            <div id="navbar">
                <div id="logo">
                    <Link to="/"><img src={logoImg} alt="logo-img"></img></Link>
                    <Link to="/"><h1>Feral Nation</h1></Link>
                </div>
                <div id="desktop-menu">
                    <div id="links">
                        <Link to="/events">Events</Link>
                        <Link to="/contact">Contact</Link>
                        <div className="subnav">
                            <button className="subnavbtn">Adopt <CaretDownFill /></button>
                            <div className="subnav-content">
                                <Link to="/about">Adoption Process</Link>
                                <Link to="/apply">Apply to Adopt</Link>
                            </div>
                        </div>
                        <Link to="/donate"><p id="donate-bttn">Donate</p></Link>
                    </div>
                </div>
                <div id="nav-icon">
                    <ThreeDotsVertical onClick={toggleMobileMenu} />
                </div>
            </div>
            {MenuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
        </>
    )
}

export default Navbar