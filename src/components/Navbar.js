import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Bus Scheduler</Link>
      </div>
      <div className="navbar-links">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <div className="navbar-buttons">
          <Link to="/login" className="button">Login</Link>
          <Link to="/signup" className="button">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
