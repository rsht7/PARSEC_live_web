// src/components/pages/CartPage.js
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../../contexts/CartContext';

// const CartPage = () => {
//   const { cart, removeFromCart } = useContext(CartContext);

//   return (
//     <div className="cart-page">
//       <h1>Your Cart</h1>
//       {cart.length === 0 ? (
//         <div className="empty-cart">
//           <p>Your cart is empty.</p>
//           <Link to="/event" className="browse-events-button">Browse Events</Link>
//         </div>
//       ):(
//         cart.map(item => (
//           <div key={item.event.id} className="cart-item">
//             <img src={item.event.img} alt={item.event.title} className="cart-item-image" />
//             <div className="cart-item-details">
//               <h4>{item.event.title}</h4>
//               <p>${25.00 * item.quantity}</p>
//               <input
//                 type="number"
//                 min="1"
//                 value={item.quantity}
//                 readOnly
//               />
//               <button onClick={() => removeFromCart(item.event.id)}>Remove</button>
//             </div>
//           </div>
//         ))
//       )}
//       {cart.length > 0 && <button className="checkout-button">Checkout</button>}
//     </div>
//   );
// };

// export default CartPage;

// src/components/Cartpage.js


// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';

// const CartPage = () => {
//   const { cartItems, clearCart } = useContext(CartContext);

//   const handleCheckout = () => {
//      //Implement your checkout functionality here
//     console.log('Checkout:', cartItems);
//     clearCart();
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div className="empty-cart">
//         <p>NO ITEMS FOUND.</p>
//         <Link to={`/event`} className="browse-events-button">BROWSE EVENTS</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       <div className="cart-items">
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.event.img} alt={item.event.title} className="cart-item-image" />
//             <div className="cart-item-details">
//               <h4>{item.event.title}</h4>
//               <p>$25.00</p>
//               <p>Quantity: {item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="subtotal">
//         <p>SUBTOTAL</p>
//         <p style={{ fontWeight: 700 }}>${cartItems.reduce((total, item) => total + 25.00 * item.quantity, 0).toFixed(2)}</p>
//       </div>
//       <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
//     </div>
//   );
// };

// export default CartPage;


// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('your-stripe-publishable-key');

// const CheckoutForm = ({ cartItems, clearCart }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     try {
//       const response = await fetch('/api/payment/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ items: cartItems }),
//       });

//       const { clientSecret } = await response.json();

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (result.error) {
//         setError(result.error.message);
//       } else {
//         if (result.paymentIntent.status === 'succeeded') {
//           setSuccess(true);
//           clearCart();
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>Pay</button>
//       {error && <div>{error}</div>}
//       {success && <div>Payment succeeded!</div>}
//     </form>
//   );
// };

// const CartPage = () => {
//   const { cartItems, clearCart } = useContext(CartContext);

//   if (cartItems.length === 0) {
//     return (
//       <div className="empty-cart">
//         <p>NO ITEMS FOUND.</p>
//         <Link to={`/event`} className="browse-events-button">BROWSE EVENTS</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       <div className="cart-items">
//         {cartItems.map((item) => (
//           <div key={item.id} className="cart-item">
//             <img src={item.event.img} alt={item.event.title} className="cart-item-image" />
//             <div className="cart-item-details">
//               <h4>{item.event.title}</h4>
//               <p>$25.00</p>
//               <p>Quantity: {item.quantity}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="subtotal">
//         <p>SUBTOTAL</p>
//         <p style={{ fontWeight: 700 }}>${cartItems.reduce((total, item) => total + 25.00 * item.quantity, 0).toFixed(2)}</p>
//       </div>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm cartItems={cartItems} clearCart={clearCart} />
//       </Elements>
//     </div>
//   );
// };

// export default CartPage;


import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MBkelSFOq4LXdKRBM4NquESXAFAX0FRoW6yNmIJH9Zeibj6NSwKrBNh23rhOjHjHw4VN63Rx9LdYD0GLC1Pt0DK00wgWTfKGR');

const CartPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

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

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <p>NO ITEMS FOUND.</p>
        <Link to={`/event`} className="browse-events-button">BROWSE EVENTS</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.event.img} alt={item.event.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.event.title}</h4>
              <p>{`$ ${item.event.price}`}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="subtotal">
        <p>SUBTOTAL</p>
        <p style={{ fontWeight: 700 }}>${cartItems.reduce((total, item) => total + item.event.price * item.quantity, 0).toFixed(2)}</p>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
