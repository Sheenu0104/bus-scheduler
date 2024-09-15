import React from 'react';

const LoginPage = () => (
  <div className="login-page">
    <h1>Login</h1>
    <form className="login-form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
);

export default LoginPage;
