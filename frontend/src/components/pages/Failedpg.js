import React from 'react';
import { Link } from 'react-router-dom';

const FailurePage = () => {
  return (
    <div className='failure-pg'>
      <h2>Payment Failed</h2>
      <p>Oops! Something went wrong with your payment.</p>
      <p>Please try again.</p>
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
};

export default FailurePage;
