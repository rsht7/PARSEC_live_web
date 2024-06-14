import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51MBkelSFOq4LXdKRBM4NquESXAFAX0FRoW6yNmIJH9Zeibj6NSwKrBNh23rhOjHjHw4VN63Rx9LdYD0GLC1Pt0DK00wgWTfKGR');

const CartModal = ({ onClose }) => {
  const { cartItems, setCartItems, clearCart } = useContext(CartContext);

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

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <p>NO ITEMS FOUND.</p>
        <Link to={`/event`} className="browse-events-button">BROWSE EVENTS</Link>
      </div>
    );
  }

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <hr style={{ marginTop: '-15px', marginBottom: '20px', paddingLeft: '0px' }} /> 
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
        <hr style={{ marginTop: '15px', marginBottom: '5px' }} /> 
        <div className="subtotal">
          <p>SUBTOTAL</p>
          <p className="total-price">${cartItems.reduce((total, item) => total + item.event.price * item.quantity, 0).toFixed(2)}</p>
        </div>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartModal;
