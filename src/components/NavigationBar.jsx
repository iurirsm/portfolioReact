import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home.png';
import aboutIcon from '../assets/aboutme.png';
import projectsIcon from '../assets/projectsbutton.png';
import servicesIcon from '../assets/services.png';
import contactIcon from '../assets/contact.png';
import logo from '../assets/IRSM.png';
import './NavigationBar.css';


function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li>
          <Link to="/">
            <img src={logo} alt="Home" className="nav-icon" />
          </Link>
        </li>        
        <li>
          <Link to="/">
            <img src={homeIcon} alt="Home" className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <img src={projectsIcon} alt="Projects" className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/about-me">
            <img src={aboutIcon} alt="About Me" className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/services">
            <img src={servicesIcon} alt="Services" className="nav-icon" />
          </Link>
        </li>
        <li>
          <Link to="/contact-me">
            <img src={contactIcon} alt="Contact Me" className="nav-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
