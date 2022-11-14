import { X } from 'react-bootstrap-icons';

// import linking from react-router
import { Link } from "react-router-dom"

const MobileMenu = ({ closeMethod }) => {

    return (
        <div id="mobile-menu">
            <ul>
                <li onClick={closeMethod}><Link to="/">Home</Link></li>
                <li onClick={closeMethod}><Link to="/events">Events</Link></li>
                <li onClick={closeMethod}><Link to="/contact">Contact</Link></li>
                <li onClick={closeMethod}><Link to="/apply">Adopt</Link></li>
                <li onClick={closeMethod}><Link to="/about">About</Link></li>
                <Link to="/donate"><p id="donate-bttn" onClick={closeMethod}>Donate</p></Link>
            </ul>
            <button id="close-nav-menu">
                <X onClick={closeMethod} />
            </button>
        </div>
    )
}

export default MobileMenu