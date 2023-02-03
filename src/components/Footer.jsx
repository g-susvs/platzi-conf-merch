import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Footer.css';

export const Footer = () => {
  return (
    <footer className="Footer">
      <Link to="/">
        <p className="Footer-title">Platzi Conf Merch</p>
      </Link>
      <p className="Footer-copy">Todos los Izquierdos Reservados</p>
    </footer>
  );
};
