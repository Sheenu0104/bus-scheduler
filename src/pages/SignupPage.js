// src/pages/SignUpPage.js
import React from 'react';
import './SignUpPage.css'; // Import CSS file if applicable

const SignUpPage = () => (
  <div className="signup-page">
    <h1>Sign Up</h1>
    <form className="signup-form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Username" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Password" required />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" placeholder="Confirm Password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
);

export default SignUpPage;
