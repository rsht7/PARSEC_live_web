// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { CartContext } from '../contexts/CartContext';
// import { loadStripe } from '@stripe/stripe-js';
// import { Link } from 'react-router-dom';
// import deleteicon from './compassets/delete-icon.png';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// const stripePromise = loadStripe('pk_test_51MBkelSFOq4LXdKRBM4NquESXAFAX0FRoW6yNmIJH9Zeibj6NSwKrBNh23rhOjHjHw4VN63Rx9LdYD0GLC1Pt0DK00wgWTfKGR');

// const CartModal = ({ onClose }) => {
//   const { cartItems, setCartItems, clearCart } = useContext(CartContext);
//   const modalRef = useRef();

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // useEffect(() => {
//   //   if (isModalOpen) {
//   //     // Apply blur effect to body content except for the modal
//   //     document.body.classList.add('blur-background');
//   //     // Prevent scrolling on the body when modal is open
//   //     document.body.style.overflow = 'hidden';
//   //   } else {
//   //     // Remove blur effect and restore scrolling when modal is closed
//   //     document.body.classList.remove('blur-background');
//   //     document.body.style.overflow = 'auto';
//   //   }

//   //   return () => {
//   //     // Cleanup: remove blur effect and restore scrolling on unmount or modal close
//   //     document.body.classList.remove('blur-background');
//   //     document.body.style.overflow = 'auto';
//   //   };
//   // }, [isModalOpen]);

//   const handleCheckout = async () => {
//     const stripe = await stripePromise;

//     // const response = await fetch('https://parsec-live-web.onrender.com/api/payment/create-checkout-session', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ items: cartItems }),
//     // });

//     const response = await fetch('/api/payment/create-checkout-session', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ items: cartItems }),
//       });


//     const session = await response.json();

//     const result = await stripe.redirectToCheckout({
//       sessionId: session.id,
//     });

//     if (result.error) {
//       console.error(result.error.message);
//     } else {
//       clearCart();
//     }
//   };

//   const handleQuantityChange = (e, itemId) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     const updatedCartItems = cartItems.map(item =>
//       item.id === itemId ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCartItems);
//   };

//   const handleRemoveItem = (itemId) => {
//     const updatedCartItems = cartItems.filter(item => item.id !== itemId);
//     setCartItems(updatedCartItems);
//   };

 

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [onClose]);


  

//   return (
//     <div className="cart-modal">
//       <div className="cart-content" ref={modalRef}>
//         <div className="cart-header">
//           <h2>Your Cart</h2>
//           <button className="close-button" onClick={onClose}>×</button>
//         </div>
//         <hr className="cart-divider" />
//         {cartItems.length === 0 ? (
//           <div className="empty-cart" style={{ textAlign: 'center', marginTop: '0.6510416vw' }}>
//             <p>NO ITEMS FOUND.</p>
//           </div>
//         ) : (
//           <div className="cart-items" style={{ maxHeight: '25vw', overflowY: 'auto' }}>
//             {cartItems.map((item, index) => (
//               <React.Fragment key={item.id}>
//                 <div className="cart-item">
//                   <img src={item.event.img} alt={item.event.title} className="cart-item-image" />
//                   <div className="cart-item-details">
//                     <h4>{item.event.title}</h4>
//                     <p>{`$ ${item.event.price}`}</p>
//                   </div>
//                   <input
//                     type="number"
//                     min="1"
//                     value={item.quantity}
//                     onChange={(e) => handleQuantityChange(e, item.id)}
//                     className="quantity-input"
//                   />
//                   <img src={deleteicon} alt='X' onClick={() => handleRemoveItem(item.id)} className='trash-btn'></img>
//                 </div>
//                 {index < cartItems.length - 1 && <hr className="cart-divider" />}
//               </React.Fragment>
//             ))}
//           </div>
//         )}
//         {cartItems.length > 0 && (
//           <React.Fragment>
//             <hr className="cart-divider" />
//             <div className="subtotal">
//               <p>SUBTOTAL</p>
//               <p className="total-price">${cartItems.reduce((total, item) => total + item.event.price * item.quantity, 0).toFixed(2)}</p>
//             </div>
//             <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
//           </React.Fragment>
//         )}
//         <div className='browse-link'>
//           <Link to='/event'  onClick={onClose}>Browse Events</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartModal;



import React, { useContext, useEffect, useRef, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import deleteicon from './compassets/delete-icon.png';



const stripePromise = loadStripe('pk_test_51MBkelSFOq4LXdKRBM4NquESXAFAX0FRoW6yNmIJH9Zeibj6NSwKrBNh23rhOjHjHw4VN63Rx9LdYD0GLC1Pt0DK00wgWTfKGR');

const CartModal = ({ onClose }) => {
  const { cartItems, setCartItems, clearCart } = useContext(CartContext);
  const modalRef = useRef();

  // const [isModalOpen, setIsModalOpen] = useState(true); // Set to true to apply blur on initial render

 
  useEffect(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/payment/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartItems }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      clearCart();
    }
  };

  const handleQuantityChange = (e, itemId) => {
    const newQuantity = parseInt(e.target.value, 10);
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // setIsModalOpen(false);
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop">
    <div className="cart-modal">
      <div className="cart-content" ref={modalRef}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          {/* <button className="close-button" onClick={() => { setIsModalOpen(false); onClose(); }}>×</button> */}
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <hr className="cart-divider" />
        {cartItems.length === 0 ? (
          <div className="empty-cart" style={{ textAlign: 'center', marginTop: '0.6510416vw' }}>
            <p>NO ITEMS FOUND.</p>
            <div className='browse-link'>
    
            <Link to='/event' onClick={onClose}>Browse  Events</Link>
          </div>
          </div>
         
          
        ) : (
          <div className="cart-items" style={{ overflowY: 'auto' }}>
            {cartItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="cart-item">
                  <img src={item.event.img} alt={item.event.title} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.event.title}</h4>
                    <p>{`$ ${item.event.price}`}</p>
                  </div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                    className="quantity-input"
                  />
                  <img src={deleteicon} alt='X' onClick={() => handleRemoveItem(item.id)} className='trash-btn'></img>
                </div>
                {index < cartItems.length - 1 && <hr className="cart-divider" />}
              </React.Fragment>
            ))}
          </div>
        )}
        {cartItems.length > 0 && (
          <React.Fragment>
            <hr className="cart-divider" />
            <div className="subtotal">
              <p>SUBTOTAL</p>
              <p className="total-price">${cartItems.reduce((total, item) => total + item.event.price * item.quantity, 0).toFixed(2)}</p>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            <div className='browse-link'>
          
              <Link to='/event' onClick={onClose}>Browse More Events</Link>
            </div>
          </React.Fragment>
        )}
        
      </div>
    </div>
    </div>
  );
};

export default CartModal;

