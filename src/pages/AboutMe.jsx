/* 
File Name: AboutMe.jsx
Student Name: Iuri Melo
Student ID: 301382883
Date: 2024-09-22
*/

import React from 'react';
import leftImage from '../assets/aboutMePic.png'; 
import rightImage from '../assets/photous.png';
import resumeFile from '../assets/resume.pdf';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <div className="left-section">
        <img src={leftImage} alt="About me image" className="about-image" />
        <h1 className="about-name">Iuri Renato Souza Melo</h1> 
        <p className="about-paragraph">
			I’m a software engineering student and freelance coder with a diverse background in IT. Having worked as a network engineer earlier in my career, I bring a deep understanding of both software and infrastructure. My current focus is on delivering efficient, scalable solutions through modern programming practices.
        </p>
      </div>

      <div className="right-section">
        <img src={rightImage} alt="Right image" className="about-image" />
        <a href={resumeFile} download="resume.pdf" className="resume-link">
          Download my resume
          </a>
      </div>
    </div>
  );
}

export default AboutMe;












