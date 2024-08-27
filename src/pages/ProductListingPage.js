import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import './ProductListingPage.css'; // Ensure this path is correct

function ProductListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const products = useSelector((state) => state.products);
  
  // Define categories based on your product data
  const categories = ['All', 'Indoor', 'Medicinal', 'Outdoor'];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <div className="category-filter">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-listing">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;