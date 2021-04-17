import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './Style.css'

const CheckoutForm = ({handleSubmit}) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError,setPaymentError] = useState(null);
  const [paymentSuccess,setPaymentSuccess] = useState(null);
  
    const handleSubmitt = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
       
        return;
      }
      const cardElement = elements.getElement(CardElement);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
      } else {
          setPaymentSuccess(paymentMethod.id);
          setPaymentError(null);
        //   handlePayment(paymentMethod.id)
        
      }
    };
  
    return (
    <div>
          <form onSubmit={handleSubmitt}>
        <CardElement />
    
        <button type="submit" onClick={handleSubmit} disabled={!stripe}>
          Pay
        </button>
        
      </form>
      {
        paymentError && <p style={{color: 'red'}}>{paymentError}</p>
    }
    {
        paymentSuccess && <p style={{color: 'green'}}>Thank You for your Payment</p>
    }
    </div>
    );
};

export default CheckoutForm;