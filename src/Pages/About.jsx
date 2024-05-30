import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage({ visits }) {
  return (
    <div>
      <h1>Welcome to the About Page</h1>
      <p>Home page visited {visits} times</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}


export default AboutPage;
