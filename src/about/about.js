import React from 'react';
import '../about/about.css';
import profile from './image/Wbb.jpg';
import { ReactTyped } from 'react-typed'

function About() {
  return (
    <>
      {/* Main About Section */}
      <div className="app container" id='about'>
        <div className="hero-section">
          <div className="hero-text">
            <h1>Hi, I am</h1>
            <h2>Sujith k</h2>
            <h3>I am a {' '} <span className="highlight"> < ReactTyped
              strings={['Full Stack Developer', 'Mern Stack Developer', 'Mean Stack Developer']}
              typeSpeed={80}
              backSpeed={50}
              loop
            /></span></h3>
            <p>
              Full-Stack Developer skilled in MERN and MEAN stack development with hands-on experience in
              building responsive web applications. Proficient in React, Angular, Node.js, MongoDB, and Express.js.
              Aspiring to leverage these skills to create efficient web solutions. deliver responsive designs, and
              enhance user satisfaction through best practices

            </p>
            <button className="resume-btn" onClick={() => window.open('/SUJITH.K.pdf', '_blank')}>Check Resume</button>
          </div>

          <div className="hero-image">
            <img src={profile} alt="Sujith Sukumar" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
