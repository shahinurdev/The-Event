import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51Ie0dJLbkWuALUseg5NjFDQPMllcajVpT8ytZEWAwlfEqo39AttM8wFH6nqeDfniVSg8SWUuwJUHeKXJ3KidMqSV00llE6lfXj');

const Stripe = ({handleSubmit}) => {
    return (
        <div>
                    <Elements stripe={stripePromise}>
                      <CheckoutForm handleSubmit={handleSubmit}></CheckoutForm>
                    </Elements>
                </div>
    );
};

export default Stripe;