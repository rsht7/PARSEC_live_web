import { Link } from 'react-router-dom';
import fulllogo from './compassets/fulllogo.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [headerBackground, setHeaderBackground] = useState('');

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleNav = () => {
    setShowNav(!showNav);
    setHeaderBackground(showNav ? '' : 'black'); // Toggle header background color
  };

  return (
    <header className={`header ${isScrollingUp ? 'show' : 'hide'} ${showNav ? 'show-nav' : ''}`} style={{ backgroundColor: headerBackground }}>
      <nav className='navbar'>
        <h1>
          <Link to='/'>
            <img src={fulllogo} alt='Logo' />
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
            <Link to='/about'>ABOUT US</Link>
          </li>
          <li>
            <Link to='/contactus'>CONTACT</Link>
          </li>
        </ul>
        <button className='cart-btn'>CART</button>
      </nav>
    </header>
  );
}

export default Navbar;
