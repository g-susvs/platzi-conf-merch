import React, { useContext } from 'react';
import { Product } from './Product';
import '../style/components/Products.css';
import { AppContext } from '../context/AppContext';

export const Products = () => {
  const {
    state: { products },
    addCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    const newCartItem = {
      ...product,
      cartId: new Date().toLocaleTimeString(),
    };
    addCart(newCartItem);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};
