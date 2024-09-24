/* 
File Name: Services.jsx
Student Name: Iuri Melo
Student ID: 301382883
Date: 2024-09-22
*/

import React from 'react';
import servicesImage from '../assets/services-image.png'; 
import './Services.css';

// Note: Services placeholder.
function Services() {
  return (
    <div className="services-container">
      <div className="left-section">
        <img src={servicesImage} alt="Services" className="services-image" />
        <p className="services-text">
          Proin ultrices orci vel ante vulputate, quis efficitur velit laoreet. Nullam maximus feugiat massa, quis fermentum mi. 
        </p>
      </div>
    </div>
  );
}

export default Services;
