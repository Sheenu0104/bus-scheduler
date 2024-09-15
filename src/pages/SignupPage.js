import React from 'react';

const SignupPage = () => (
  <div className="signup-page">
    <h1>Signup</h1>
    <form className="signup-form">
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Signup</button>
    </form>
  </div>
);

export default SignupPage;
