import { Link } from 'react-router-dom';
import fulllogo from './compassets/fulllogo.png';
import { useState } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <header className={`header ${showNav ? 'show-nav' : ''}`}>
            <nav className="navbar">
                <h1>
                    <Link to="/">
                        <img src={fulllogo} alt="Logo" />
                    </Link>
                </h1>
                <div className={`hamburger ${showNav ? 'open' : ''}`} onClick={toggleNav}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`nav-links ${showNav ? 'show' : ''}`}>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/event">EVENTS</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/contactus">CONTACT</Link>
                    </li>
                </ul>
                <button className="cart-btn">CART</button>
            </nav>
        </header>
    );
};

export default Navbar;
