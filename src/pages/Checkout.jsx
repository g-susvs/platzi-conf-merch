import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Checkout.css';
import { AppContext } from '../context/AppContext';
import { MetaHead } from '../components/MetaHead';

export const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (cartIdToRemove) => () => {
    removeFromCart(cartIdToRemove);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    <MetaHead title={'Lista de productos'}/>
      <main className="Checkout">
        <section className="Checkout-content">
          <h3>{cart.length > 0 ? 'Lista de Pedidos:' : 'Sin pedidos...'}</h3>
          {cart.map((item, index) => (
            <article key={index} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item.cartId)}>
                <i className="fas fa-trash-alt" title="Eliminar"></i>
              </button>
            </article>
          ))}
        </section>
        {cart.length > 0 && (
          <aside className="Checkout-sidebar">
            <h3>Precio Total: ${totalPrice}</h3>
            <Link to="/checkout/information">
              <button type="button">Continue</button>
            </Link>
          </aside>
        )}
      </main>
    </>
  );
};
