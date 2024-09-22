import React from 'react';
import projectTitle from '../assets/projectTitle.png'; 
import projectOne from '../assets/Projects1.png'; 
import projectTwo from '../assets/Projects2.png'; 
import projectThree from '../assets/Projects3.png'; 
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <img src={projectTitle} alt="Top Left" className="top-left-image" />

      <div className="projects-grid">
        <div className="project-item">
          <img src={projectOne} alt="Project 1" className="project-image" />
          <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices orci vel ante vulputate, quis efficitur velit laoreet. Nullam maximus feugiat massa, quis fermentum mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam a lobortis sem. Fusce pretium arcu quis cursus euismod. Nulla dapibus tortor quis tellus mollis, ac fermentum dolor rutrum. Donec dolor augue, auctor sit amet ullamcorper et, posuere sed orci. Nulla et euismod massa, in mattis ligula. Maecenas eu quam vitae enim suscipit tempor. Nulla nec elit in nulla auctor suscipit. Nulla arcu ipsum, lobortis eget elementum et, vestibulum et augue. Quisque vel dui libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec finibus nec massa ut dictum.</p>
        </div>

        <div className="project-item">
          <img src={projectTwo} alt="Project 2" className="project-image" />
          <p className="project-description">Praesent fringilla nunc non augue maximus, convallis imperdiet est tempor. Suspendisse sed luctus metus. Mauris vulputate nec leo quis hendrerit. Integer a bibendum risus. Maecenas ultricies egestas feugiat. Mauris fermentum ipsum sollicitudin quam condimentum rutrum. Sed efficitur ante tortor. Nullam id nibh sollicitudin leo pulvinar pharetra. Curabitur scelerisque malesuada mi, varius tempor lorem. Fusce in quam condimentum, congue magna in, hendrerit lorem. Suspendisse sapien enim, hendrerit in viverra ac, fermentum sed mauris. Maecenas auctor, nulla et molestie iaculis, dolor velit efficitur purus, sed tincidunt tortor felis sed dui.</p>
        </div>

        <div className="project-item">
          <img src={projectThree} alt="Project 3" className="project-image" />
          <p className="project-description">Nullam nulla risus, pulvinar iaculis gravida ut, egestas ac elit. Integer lobortis, justo eleifend vulputate venenatis, nunc ante varius odio, non venenatis mi leo eget lectus. Quisque non porta nisl. In hac habitasse platea dictumst. Suspendisse eu interdum enim. Proin egestas tellus tempor, egestas metus commodo, condimentum augue. Nunc dictum lacus nec sollicitudin semper. Ut sit amet mauris at magna mattis maximus at nec quam. Integer fringilla ligula eget sem blandit, in pellentesque nisl iaculis. Aliquam in nibh risus. Phasellus vehicula est tortor, nec hendrerit massa venenatis rutrum. Aenean egestas metus nec nisl laoreet, a ornare nulla dignissim. Vivamus non molestie lectus. Donec non euismod nisi.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;


