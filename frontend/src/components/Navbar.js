import {Link} from 'react-router-dom'
import fulllogo from './compassets/fulllogo.png'
// import twitter from './twitter.png'
// import facebook1 from './facebook1.png'
// import youtube1 from './youtube1.png'
// import whatsapp1 from './whatsapp1.png'

import { useState, useEffect } from 'react'

const Navbar = () => {

    // const [isScrolling, setIsScrolling] = useState(false);

    // useEffect(() => {
    // let timeoutId;

    // const handleScroll = () => {
    //   setIsScrolling(true);
    //   clearTimeout(timeoutId);
    //   timeoutId = setTimeout(() => setIsScrolling(false), 3000);
    // };

    // window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
    // }, []);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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





    return(
        // <header className='header'>

         <header  className={`header ${isScrollingUp ? 'show' : 'hide'}`}> 
            
            {/* <div className='prenav'>
                <p>Phone : +1 (123) 456-7890 - Email : contact@parseclive.com</p>
                <ul>
                    <li><img src={facebook1}></img></li>   
                    <li><img src={twitter}></img></li>

                    <li><img src={youtube1}></img></li>
                    <li><img src={whatsapp1}></img></li>
                </ul>
            </div> */}
            <nav className='navbar'>
                
                <h1>
                    <Link to='/' >
                    <img src={fulllogo}></img>
                    </Link> 
                </h1>
                <ul className='nav-links'> 
                    <li><Link to='/'>
                            HOME
                        </Link>
                    </li>    
                           
                    <li><Link to='/event'>
                            EVENTS
                        </Link>
                    </li> 
                    <li>
                        <Link to='/about'>
                             ABOUT US
                        </Link>
                    </li> 
                    <li>
                        <Link to='/contactus'>
                             CONTACT
                         </Link>
                    </li> 

                </ul>
                {/* <Link className='cart-btn'  to=''>CART</Link> */}
                <button className='cart-btn'>CART</button>
                
                      
            </nav> 
                
                                         
        </header>
            
    
    )
}

export default Navbar