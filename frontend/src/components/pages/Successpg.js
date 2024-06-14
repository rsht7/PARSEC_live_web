import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div className='failure-pg'>
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase.</p>
      <Link to="/event">Continue Shopping</Link>
    </div>
  );
};

export default SuccessPage;
