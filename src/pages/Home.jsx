/* 
File Name: Home.jsx
Student Name: Iuri Melo
Student ID: 301382883
Date: 2024-09-22
*/

import React from 'react';
import welcomeImage from '../assets/welcome.png'; 
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <img src={welcomeImage} alt="Welcome" className="welcome-image" />
    </div>
  );
}

export default Home;