import React, { useState } from 'react';
import Slider from 'react-slick';

const HomePage = () => {
  const [startPoint, setStartPoint] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    if (startPoint && destination) {
      const url = `https://www.abhibus.com/bus_search/${startPoint}/7/${destination}/3/15-09-2024/O`;
      window.open(url, '_blank');
    } else {
      alert('Please fill in both fields');
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main className="main-section">
      <div className="search-container">
        <h1>Bus Scheduler</h1>
        <input
          type="text"
          placeholder="Start Point"
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination Point"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section mt-5">
        <h2>Why Choose AbhiBus for Bus Ticket Booking?</h2>
        <div className="cards-container">
          <div className="card">
            <h3>3,50,000+ Bus Routes</h3>
            <p>Offering unparalleled choices for your travel needs</p>
          </div>
          <div className="card">
            <h3>4000+ Bus Partners</h3>
            <p>Ranging from State RTCs to private partners</p>
          </div>
          <div className="card">
            <h3>Fastest Bus Booking</h3>
            <p>Swift and seamless bus ticket booking experience</p>
          </div>
          <div className="card">
            <h3>24/7 Customer Support</h3>
            <p>Available for all your bus booking needs</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
