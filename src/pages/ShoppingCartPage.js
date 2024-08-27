// src/pages/ShoppingCartPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalCost = useSelector(state => state.cart.totalCost);

  return (
    <div>
      <div className="shopping-cart">
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <div className="cart-summary">
          <p>Total: ${totalCost.toFixed(2)}</p>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
          <button>Checkout (Coming Soon)</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;