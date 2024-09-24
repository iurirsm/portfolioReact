/* 
File Name: Projects.jsx
Student Name: Iuri Melo
Student ID: 301382883
Date: 2024-09-22
*/

import React from 'react';
import projectTitle from '../assets/projectTitle.png'; 
import projectOne from '../assets/Projects1.png'; 
import projectTwo from '../assets/Projects2.png'; 
import projectThree from '../assets/Projects3.png'; 
import './Projects.css';


// Note: The following projects are placeholders as there are no actual projects to display yet.
function Projects() {
  return (
    <div className="projects-container">
      
      {/* Top Left Image - Placeholder */}
      <img src={projectTitle} alt="Top Left" className="top-left-image" />

      {/* Projects Grid */}
      <div className="projects-grid">

        {/* Project 1 - Placeholder */}
        <div className="project-item">
          <img src={projectOne} alt="Project 1" className="project-image" />
          <p className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices orci vel ante vulputate, quis efficitur velit laoreet. Nullam maximus feugiat massa, quis fermentum mi.
          </p>
        </div>

        {/* Project 2 - Placeholder */}
        <div className="project-item">
          <img src={projectTwo} alt="Project 2" className="project-image" />
          <p className="project-description">
            Praesent fringilla nunc non augue maximus, convallis imperdiet est tempor. Suspendisse sed luctus metus. Mauris vulputate nec leo quis hendrerit. Integer a bibendum risus.
          </p>
        </div>

        {/* Project 3 - Placeholder */}
        <div className="project-item">
          <img src={projectThree} alt="Project 3" className="project-image" />
          <p className="project-description">
            Nullam nulla risus, pulvinar iaculis gravida ut, egestas ac elit. Integer lobortis, justo eleifend vulputate venenatis, nunc ante varius odio, non venenatis mi leo eget lectus.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
