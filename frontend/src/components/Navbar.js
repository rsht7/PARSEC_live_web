import { useLocation,Link } from 'react-router-dom';
import fulllogo from './compassets/fulllogo.png';
import { useState, useEffect } from 'react';

const Navbar = () => {

  const location = useLocation();
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

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <header className={`header ${isScrollingUp ? 'show' : 'hide'} ${showNav ? 'show-nav' : ''}`} style={{ backgroundColor: headerBackground }}>
      <nav className='navbar'>
        <h1>
          <Link to='/'>
            <img src={fulllogo} alt='Logo' />
          </Link>
        </h1>

        
        <div className='cart-ham'>
        <Link to='/cart'        className='cart-btn-link-phone'><button className='cart-btn-phone'>CART</button>
        </Link>

        <div className={`hamburger ${showNav ? 'open' : ''}`} onClick={toggleNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        </div>
        

        <ul className={`nav-links ${showNav ? 'show' : ''}`}>
          <li>
            <Link to="/" className={getLinkClass('/')}>HOME</Link>
          </li>
          <li>
            <Link to="/event" className={getLinkClass('/event')}>EVENTS</Link>
          </li>
          <li>
            <Link to='/about'className={getLinkClass('/about')}>ABOUT US</Link>
          </li>
          <li>
            <Link to='/contactus' className={getLinkClass('/contactus')}>CONTACT</Link>
          </li>
        </ul>
        <Link to='/cart' className='cart-btn-link'><button className='cart-btn'>CART</button></Link>
      </nav>
    </header>
  );
}

export default Navbar;
