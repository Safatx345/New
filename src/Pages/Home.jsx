import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ visits }) {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Display your Banner Id on Home page</p>
      <p>Banner ID: B00482334</p>
      <p>Home page visited {visits} times</p>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
