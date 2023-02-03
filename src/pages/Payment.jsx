import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../style/components/Payment.css';

export const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    color: 'blue',
    shape: 'rect',
    label: 'paypal',
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentSucces = (data) => {
    console.log(data);
    if (data.status == 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };
  return (
    <main className="Payment">
      <section className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item, index) => (
          <div className="Payment-item" key={index}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <article className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={totalPrice}
            onPaymentStart={() => console.log('Start Payment')}
            onSuccess={(data) => handlePaymentSucces(data)}
            onError={(error) => console.log(error)}
            onCancel={(data) => console.log(data)}
          />
        </article>
      </section>
      <aside className="Payment-sidebar"></aside>
    </main>
  );
};
