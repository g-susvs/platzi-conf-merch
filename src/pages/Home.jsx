import React from 'react';
import { MetaHead } from '../components/MetaHead';
import { Products } from '../components/Products';

export const Home = () => {
  return (
    <>
      <MetaHead title={'Platzi Conf Merch'} />
      <Products />;
    </>
  )
};
