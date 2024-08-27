import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions'; // Adjust the path if necessary

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

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={imageMap[product.image]} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${parseFloat(product.price.replace('$', '')).toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={isInCart}>
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;