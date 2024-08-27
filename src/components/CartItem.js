import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../store/actions'; // Adjust the path if necessary

// Import images
import fiddleLeafFig from './assets/Fiddel Leaf.jpg';
import snakePlant from './assets/snake_plant.jpeg';
import aloeVera from './assets/aloe_vera.jpg';
import spiderPlant from './assets/spider plant.jpg';
import peaceLily from './assets/peace lily.png';
import bostonFern from './assets/boston fern.jpg';

// Map image names to imports
const imageMap = {
  'Fiddel Leaf.jpg': fiddleLeafFig,
  'snake_plant.jpeg': snakePlant,
  'aloe_vera.jpg': aloeVera,
  'spider plant.jpg': spiderPlant,
  'peace lily.png': peaceLily,
  'boston fern.jpg': bostonFern,
};

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={imageMap[item.image]} alt={item.name} />
      <h2>{item.name}</h2>
      <p>${parseFloat(item.price.replace('$', '')).toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <div className="cart-item-buttons">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease} disabled={item.quantity === 1}>Decrease</button>
        <button onClick={handleRemove}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;