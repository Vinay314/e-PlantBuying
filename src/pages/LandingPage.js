import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <h1>Paradise Nursery</h1>
      <h3>Feels Like Heaven!!!</h3>
      <p>Welcome to Paradise Nursery, your one-stop shop for the best houseplants. We offer a wide variety of plants to beautify your home, from exotic species to everyday favorites. Our mission is to provide high-quality plants and exceptional customer service, ensuring your gardening experience is as enjoyable and fulfilling as possible.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;