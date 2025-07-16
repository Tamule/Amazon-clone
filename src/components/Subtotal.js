import React from 'react';
import './css/Subtotal.css';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Subtotal() {
  const navigate = useNavigate(); 
  const [{ basket, user }] = useStateValue(); 
  const total = getBasketTotal(basket);

  const handleCheckout = async () => {
    if (!user) {
      toast.warn('Please sign in to proceed to checkout.');
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/create-checkout-session', {
        basket, 
      });

      if (response.data.url) {
        toast.success('✅ Your order is being processed!');
        window.location.href = response.data.url;
      } else {
           toast.error('❌ Your order could not be placed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Something went wrong.Try again later.');
    }
  };

  return (
    <div className='subtotal'>
      <p>
        Subtotal ({basket.length} items): <strong>${total.toFixed(2)}</strong>
      </p>
      <small className='subtotal_left'>
        <input type='checkbox'   style={{ cursor: 'pointer' }}/>
        This order contains a gift
      </small>

      <button onClick={handleCheckout}  style={{ cursor: 'pointer' }}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
