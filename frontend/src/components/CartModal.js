import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';
import deleteicon from './compassets/delete-icon.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const stripePromise = loadStripe('pk_test_51MBkelSFOq4LXdKRBM4NquESXAFAX0FRoW6yNmIJH9Zeibj6NSwKrBNh23rhOjHjHw4VN63Rx9LdYD0GLC1Pt0DK00wgWTfKGR');

const CartModal = ({ onClose }) => {
  const { cartItems, setCartItems, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('https://parsec-live-web.onrender.com/api/payment/create-checkout-session', {
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

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <hr className="cart-divider" />
        {cartItems.length === 0 ? (
          <div className="empty-cart" style={{ textAlign: 'center', marginTop: '0.6510416vw' }}>
            <p>NO ITEMS FOUND.</p>
            {/* <Link to={`/event`} className="browse-events-button" style={{ 
              background: 'linear-gradient(to left, rgb(20, 4, 93), rgb(76, 6, 101))',
              color: 'white',
              padding: ' 0.6510416vw 1.302083vw',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '-15px'
            }}>BROWSE EVENTS</Link> */}
          </div>
        ) : (
          <div className="cart-items" style={{ maxHeight: '25vw', overflowY: 'auto' }}>
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
                  {/* <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => handleRemoveItem(item.id)}
                    style={{ cursor: 'pointer', marginLeft: '0.32552083vw', marginRight: '0.32552083vw', color: '#ccc', fontSize: '0.9765625vw', marginBottom: '2.27864583vw' }}
                  /> */}
                  <img src={deleteicon} alt='X' onClick={()=>handleRemoveItem(item.id)} className='trash-btn' ></img>
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
          </React.Fragment>
        )}
        <div className='browse-link'><Link to='/event'>Browse Events</Link></div>
      </div>
    </div>
  );
};

export default CartModal;
