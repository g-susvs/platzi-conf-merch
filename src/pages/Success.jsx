import React, { useContext } from 'react';
import { Map } from '../components/Map';
import { AppContext } from '../context/AppContext';
import { useGoogleAddress } from '../hooks/useGoogleAddress';

export const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);
  const location = useGoogleAddress(buyer[0].address);

  return (
    <main className="Success">
      <section className="Success-content">
        <div>
          <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
          <span>Tu pedidp llegara en 3 días a tu dirección</span>
        </div>
        <article className="Success-map">
          {location && <Map location={location} />}
        </article>
      </section>
    </main>
  );
};
