// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Headname from '../Headname';
// import homepic2 from './homepic2.jpeg';
// import facebook3 from '../compassets/facebook3.png';
// import instagram from '../compassets/instagram.png';
// import shareicon from './shareicon.png'
// import Newsletter from '../Newsletter';

// function EventDetails() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [cartVisible, setCartVisible] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [cartEmpty, setCartEmpty] = useState(false);
  
  

//   useEffect(() => {
//     fetch(`/api/events/${id}`)
//       .then((response) => response.json())
//       .then((data) => setEvent(data))
//       .catch((error) => console.error('Error fetching event details:', error));
//   }, [id]);

//   if (!event) {
//     return <div>Loading...</div>;
//   }

//   const handleAddToCart = () => {
//     setCartVisible(true);
//     setCartEmpty(false);
//   };

//   const handleCloseCart = () => {
//     setCartVisible(false);
//   };

//   const handleEmptyCart = () => {
//     setCartEmpty(true);
//   };

//   return (
//     <div className="total">
//       <Headname name={<Link to='/event' style={{textDecoration:'none',color:'rgba(194, 194, 194, 1)',}}>Events</Link>} eventname={`> ${event.title}`} pic={homepic2} />
//       <div className='back-link'> <Link to='/event'>&#10094; ALL EVENTS </Link></div>
//       <div className={`eventDet-container ${cartVisible ? 'blur' : ''}`}>
//         <div className="page-body">
//           <div className="page-container">
//             <div className="left-side">
//               <div className="event-info">
//                 <h4 className="event-date-ie" style={{}}>{event.date}</h4>
//                 <h3 className="event-title">{event.title}</h3>
//                 <p className="event-text">{event.text}</p>
//                 <p className="event-text">{event.text}</p>
//               </div>
//               <img src={event.img} alt="Event-Image" className="event-image-phone" />
//               <div className="time-location">
//                 <h4>Time & Location</h4>
//                 <p className="event-date-time">{event.date}, {event.time}</p>
//                 <p className="event-location">{event.location}</p>
//                 <p className="event-terms">Terms and Conditions</p>
//               </div>
//               <div className="share">
//                 <p>Share this event</p>
//                 <div className="icons">
//                   <span><img src={facebook3} alt="Facebook Icon" /></span>
//                   <span><img src={instagram} alt="Instagram Icon" /></span>
//                   <span><img src={shareicon} alt="share Icon" /></span>
//                 </div>
//               </div>
//             </div>
//             <div className="right-side">
//               <img src={event.img} alt="Event-Image" className="event-image-landscape" />
//               <div className='ticket-booking'>
//                 <h3>Book Tickets</h3>
//                 <div className='form-labels'>
//                   <p className='f-l1'>Quantity</p>
//                   <p>Ticket price</p>
//                 </div>
//                 <form className='ticket-form' onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
                  // <input
                  //   type='number'
                  //   id='quantity'
                  //   name='quantity'
                  //   min='1'
                  //   value={quantity}
                  //   onChange={(e) => setQuantity(e.target.value)}
                  // />
//                   <p>$25.00</p>
//                   <button type="submit">ADD TO CART</button>
//                 </form>
//               </div>
//               <div className="share-phone">
//                 <p>Share this event</p>
//                 <div className="icons-phone">
//                   <span><img src={facebook3} alt="Facebook Icon" /></span>
//                   <span><img src={instagram} alt="Instagram Icon" /></span>
//                   <span><img src={shareicon} alt="share Icon" /></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {cartVisible && (
//         <div className="cart-modal">
//           <div className="cart-content">
//             <div className="cart-header">
//               <h2>Your Cart</h2>
//               <button className="close-button" onClick={handleCloseCart}>X</button>
//             </div>
//             <hr style={{ marginTop: '-15px', marginBottom: '20px', paddingLeft: '0px' }} /> 
//             {!cartEmpty ? (
//               <>
//                 <div className="cart-item">
//                   <img src={event.img} alt={event.title} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h4>{event.title}</h4>
//                     <p>$25.00</p>
//                   </div>
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={(e) => setQuantity(e.target.value)}
//                     className="quantity-input"
//                   />
//                   <button className="delete-button" onClick={handleEmptyCart}>🗑️</button>
//                 </div>
//                 <hr style={{ marginTop: '15px', marginBottom: '5px' }} /> 
//                 <div className="subtotal">
//                   <p>SUBTOTAL</p>
//                   <p style={{ fontWeight: 700 }}>${(25.00 * quantity).toFixed(2)}</p>
//                 </div>
//                 <button className="checkout-button">Checkout</button>
//               </>
//             ) : (
//               <div className="empty-cart">
//                 <p>NO ITEMS FOUND.</p>
//                 <Link to={`/event`} className="browse-events-button">BROWSE EVENTS</Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//       <Newsletter />
//     </div>
//   );
// }

// export default EventDetails;




// src/components/pages/EventDetails.js
// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, Link , useNavigate} from 'react-router-dom';
// import Headname from '../Headname';
// import homepic2 from './homepic2.jpeg';
// import facebook3 from '../compassets/facebook3.png';
// import instagram from '../compassets/instagram.png';
// import shareicon from './shareicon.png';
// import Newsletter from '../Newsletter';
// import { CartContext } from '../../contexts/CartContext';

// function EventDetails() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`/api/events/${id}`)
//       .then((response) => response.json())
//       .then((data) => setEvent(data))
//       .catch((error) => console.error('Error fetching event details:', error));
//   }, [id]);

//   if (!event) {
//     return <div>Loading...</div>;
//   }

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     addToCart(event, quantity);
//     navigate('/cart');
//   };

//   return (
//     <div className="total">
//       <Headname name={<Link to='/event' style={{ textDecoration: 'none', color: 'rgba(194, 194, 194, 1)' }}>Events</Link>} eventname={`> ${event.title}`} pic={homepic2} />
//       <div className='back-link'> <Link to='/event'>&#10094; ALL EVENTS </Link></div>
//       <div className='eventDet-container'>
//         <div className="page-body">
//           <div className="page-container">
//             <div className="left-side">
//               <div className="event-info">
//                 <h4 className="event-date-ie">{event.date}</h4>
//                 <h3 className="event-title">{event.title}</h3>
//                 <p className="event-text">{event.text}</p>
//                 <p className="event-text">{event.text}</p>
//               </div>
//               <img src={event.img} alt="Event-Image" className="event-image-phone" />
//               <div className="time-location">
//                 <h4>Time & Location</h4>
//                 <p className="event-date-time">{event.date}, {event.time}</p>
//                 <p className="event-location">{event.location}</p>
//                 <p className="event-terms">Terms and Conditions</p>
//               </div>
//               <div className="share">
//                 <p>Share this event</p>
//                 <div className="icons">
//                   <span><img src={facebook3} alt="Facebook Icon" /></span>
//                   <span><img src={instagram} alt="Instagram Icon" /></span>
//                   <span><img src={shareicon} alt="share Icon" /></span>
//                 </div>
//               </div>
//             </div>
//             <div className="right-side">
//               <img src={event.img} alt="Event-Image" className="event-image-landscape" />
//               <div className='ticket-booking'>
//                 <h3>Book Tickets</h3>
//                 <div className='form-labels'>
//                   <p className='f-l1'>Quantity</p>
//                   <p>Ticket price</p>
//                 </div>
//                 <form className='ticket-form' onSubmit={(e) => { e.preventDefault(); handleAddToCart(); }}>
//                   <input
//                     type='number'
//                     id='quantity'
//                     name='quantity'
//                     min='1'
//                     value={quantity}
//                     onChange={(e) => setQuantity(parseInt(e.target.value))}
//                   />
//                   <p>$25.00</p>
//                   <button type="submit">ADD TO CART</button>
//                 </form>
//               </div>
//               <div className="share-phone">
//                 <p>Share this event</p>
//                 <div className="icons-phone">
//                   <span><img src={facebook3} alt="Facebook Icon" /></span>
//                   <span><img src={instagram} alt="Instagram Icon" /></span>
//                   <span><img src={shareicon} alt="share Icon" /></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Newsletter />
//     </div>
//   );
// }

// export default EventDetails;


// src/components/pages/EventDetails.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Headname from '../Headname';
import homepic2 from './homepic2.jpeg';
import facebook3 from '../compassets/facebook3.png';
import instagram from '../compassets/instagram.png';
import shareicon from './shareicon.png';
import Newsletter from '../Newsletter';
import { CartContext } from '../../contexts/CartContext';
import CartModal from '../CartModal'; // Import the CartModal component

function EventDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then((response) => response.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error('Error fetching event details:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (e) => {
    e.preventDefault(); // Ensure this is only called within a form submission
    addToCart(event, quantity);
    setIsCartModalOpen(true); // Show the cart modal
  };

  return (
    <div className={`total ${isCartModalOpen ? 'blur' : ''}`}> {/* Add blur class conditionally */}
      <Headname name={<Link to='/event' style={{ textDecoration: 'none', color: 'rgba(194, 194, 194, 1)' }}>Events</Link>} eventname={`> ${event.title}`} pic={homepic2} />
      <div className='back-link'> <Link to='/event'>&#10094; ALL EVENTS </Link></div>
      <div className='eventDet-container'>
        <div className="page-body">
          <div className="page-container">
            <div className="left-side">
              <div className="event-info">
                <h4 className="event-date-ie">{event.date}</h4>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-text">{event.text}</p>
                <p className="event-text">{event.text}</p>
              </div>
              <img src={event.img} alt="Event-poster" className="event-image-phone" />
              <div className="time-location">
                <h4>Time & Location</h4>
                <p className="event-date-time">{event.date}, {event.time}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-terms">Terms and Conditions</p>
              </div>
              <div className="share">
                <p>Share this event</p>
                <div className="icons">
                  <span><img src={facebook3} alt="Facebook Icon" /></span>
                  <span><img src={instagram} alt="Instagram Icon" /></span>
                  <span><img src={shareicon} alt="share Icon" /></span>
                </div>
              </div>
            </div>
            <div className="right-side">
              <img src={event.img} alt="Event-poster" className="event-image-landscape" />
              <div className='ticket-booking'>
                <h3>Book Tickets</h3>
                <div className='form-labels'>
                  <p className='f-l1'>Quantity</p>
                  <p>Ticket price</p>
                </div>
                <form className='ticket-form' onSubmit={handleAddToCart}>
                  <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    min='1'
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  />
                  <p>{`$ ${event.price}`}</p>
                  <button type="submit">ADD TO CART</button>
                </form>
              </div>
              <div className="share-phone">
                <p>Share this event</p>
                <div className="icons-phone">
                  <span><img src={facebook3} alt="Facebook Icon" /></span>
                  <span><img src={instagram} alt="Instagram Icon" /></span>
                  <span><img src={shareicon} alt="share Icon" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home-newsletter-div'><Newsletter /></div>
      {isCartModalOpen && <CartModal onClose={() => setIsCartModalOpen(false)} />} {/* Render the modal */}
    </div>
  );
}

export default EventDetails;
