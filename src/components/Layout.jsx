import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import '../style/components/Layout.css';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
