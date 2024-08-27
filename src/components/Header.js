// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import './Header.css'; // Ensure this path is correct

const Header = () => {
  // Get total quantity from Redux store
  const totalQuantity = useSelector(state => 
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="header">
      <h1 className="logo">Paradise Nursery</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              <span className="cart-icon" />
              {totalQuantity >= 0 && (
                <span className="cart-quantity">{totalQuantity}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;