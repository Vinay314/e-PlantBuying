// src/store/reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actions';

const initialState = {
    products: [
      { id: 1, name: 'Fiddle Leaf Fig', price: '$20', image: 'Fiddel Leaf.jpg', category: 'Indoor' },
      { id: 2, name: 'Snake Plant', price: '$15', image: 'snake_plant.jpeg', category: 'Indoor' },
      { id: 3, name: 'Aloe Vera', price: '$10', image: 'aloe_vera.jpg', category: 'Medicinal' },
      { id: 4, name: 'Spider Plant', price: '$12', image: 'spider plant.jpg', category: 'Indoor' },
      { id: 5, name: 'Peace Lily', price: '$18', image: 'peace lily.png', category: 'Indoor' },
      { id: 6, name: 'Boston Fern', price: '$16', image: 'boston fern.jpg', category: 'Outdoor' },
    ],
    cart: {
      items: [],
      totalCost: 0,
    },
  };
  

const parsePrice = (price) => {
  if (typeof price === 'string') {
    return parseFloat(price.replace('$', ''));
  }
  return 0; // Default value if price is not a string
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Add or update item in cart
      const existingItem = state.cart.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // Item already in cart, update quantity
        const updatedItems = state.cart.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: {
            items: updatedItems,
            totalCost: state.cart.totalCost + parsePrice(action.payload.price),
          },
        };
      } else {
        // New item to add to cart
        const newItem = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cart: {
            items: [...state.cart.items, newItem],
            totalCost: state.cart.totalCost + parsePrice(action.payload.price),
          },
        };
      }

    case REMOVE_FROM_CART:
      // Remove item from cart
      const itemToRemove = state.cart.items.find(item => item.id === action.payload.id);
      if (itemToRemove) {
        const updatedItems = state.cart.items.filter(item => item.id !== action.payload.id);
        return {
          ...state,
          cart: {
            items: updatedItems,
            totalCost: state.cart.totalCost - (itemToRemove.quantity * parsePrice(itemToRemove.price)),
          },
        };
      }
      return state;

    case INCREASE_QUANTITY:
      // Increase item quantity
      const itemToIncrease = state.cart.items.find(item => item.id === action.payload.id);
      if (itemToIncrease) {
        const updatedItems = state.cart.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cart: {
            items: updatedItems,
            totalCost: state.cart.totalCost + parsePrice(itemToIncrease.price),
          },
        };
      }
      return state;

    case DECREASE_QUANTITY:
      // Decrease item quantity
      const itemToDecrease = state.cart.items.find(item => item.id === action.payload.id);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        const updatedItems = state.cart.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
          ...state,
          cart: {
            items: updatedItems,
            totalCost: state.cart.totalCost - parsePrice(itemToDecrease.price),
          },
        };
      }
      return state;

    default:
      return state;
  }
};

export default rootReducer;