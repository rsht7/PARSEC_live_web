import { useLocation, Link } from 'react-router-dom';
import fulllogo from './compassets/pl_hori.webp';
import { useState, useEffect, useContext, useRef } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartModal from './CartModal'; // Import the CartModal component

const Navbar = () => {
  const location = useLocation();
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [headerBackground, setHeaderBackground] = useState('');
  // const { addToCart } = useContext(CartContext);

  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // State to control modal visibility
  const navRef = useRef(null);

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

  const handleAddToCart = (e) => {
    e.preventDefault(); // Ensure this is only called within a form submission
    // addToCart(event, quantity);
    setIsCartModalOpen(true); // Show the cart modal
  };

  const handleNavLinkClick = () => {
    setShowNav(false); // Close the navbar when a link is clicked
    setHeaderBackground(''); // Reset the header background
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShowNav(false);
      setHeaderBackground('');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header ${isScrollingUp ? 'show' : 'hide'} ${showNav ? 'show-nav' : ''} ${isCartModalOpen ? 'modal-open' : ''}` } style={{ backgroundColor: headerBackground }}>
      <nav className='navbar' ref={navRef}>
        <h1>
          <Link to='/'>
            <img src={fulllogo} alt='Logo' className='logo-img' />
          </Link>
        </h1>

        <div className='cart-ham'>
          <button className='cart-btn-phone' onClick={handleAddToCart}>TICKETS</button>

          <div className={`hamburger ${showNav ? 'open' : ''}`} onClick={toggleNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <ul className={`nav-links ${showNav ? 'show' : ''}`}>
          <li>
            <Link to="/" className={getLinkClass('/')} onClick={handleNavLinkClick}>HOME</Link>
          </li>
          <li>
            <Link to="/event" className={getLinkClass('/event')} onClick={handleNavLinkClick}>EVENTS</Link>
          </li>
          <li>
            <Link to='/about' className={getLinkClass('/about')} onClick={handleNavLinkClick}>ABOUT US</Link>
          </li>
          <li>
            <Link to='/contactus' className={getLinkClass('/contactus')} onClick={handleNavLinkClick}>CONTACT</Link>
          </li>
        </ul>
        <button className='cart-btn' onClick={handleAddToCart}>TICKETS</button>
        {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />} {/* Render the modal */}
      </nav>
    </header>
  );
}

export default Navbar;


