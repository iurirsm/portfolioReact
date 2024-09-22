import React from 'react';
import leftImage from '../assets/aboutMePic.png'; 
import rightImage from '../assets/photous.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="about-container">
      <div className="left-section">
        <img src={leftImage} alt="About me image" className="about-image" />
        <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices orci vel ante vulputate, quis efficitur velit laoreet. Nullam maximus feugiat massa, quis fermentum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam a lobortis sem. Fusce pretium arcu quis cursus euismod. Nulla dapibus tortor quis tellus mollis, ac fermentum dolor rutrum. Donec dolor augue, auctor sit amet ullamcorper et, posuere sed orci. Nulla et euismod massa, in mattis ligula. Maecenas eu quam vitae enim suscipit tempor. Nulla nec elit in nulla auctor suscipit. Nulla arcu ipsum, lobortis eget elementum et, vestibulum et augue. Quisque vel dui libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec finibus nec massa ut dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices orci vel ante vulputate, quis efficitur velit laoreet. Nullam maximus feugiat massa, quis fermentum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam a lobortis sem. Fusce pretium arcu quis cursus euismod. Nulla dapibus tortor quis tellus mollis, ac fermentum dolor rutrum. Donec dolor augue, auctor sit amet ullamcorper et, posuere sed orci. Nulla et euismod massa, in mattis ligula. Maecenas eu quam vitae enim suscipit tempor. Nulla nec elit in nulla auctor suscipit. Nulla arcu ipsum, lobortis eget elementum et, vestibulum et augue. Quisque vel dui libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec finibus nec massa ut dictum.
        </p>
      </div>

      <div className="right-section">
        <img src={rightImage} alt="Right image" className="about-image" />
        <a href="/resume.pdf" className="resume-link">Download my resume</a>
      </div>
    </div>
  );
}

export default AboutMe;
