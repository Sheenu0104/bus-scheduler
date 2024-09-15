import React from 'react';

const ContactPage = () => (
  <div className="contact-page">
    <h1>Contact Us</h1>
    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Your Message" />
      <button type="submit">Send</button>
    </form>
    <p>Email: support@bus-scheduler.com</p>
    <p>Phone: +123 456 7890</p>
  </div>
);

export default ContactPage;
