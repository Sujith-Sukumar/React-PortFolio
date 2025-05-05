import React from 'react'
import '../edu/edu.css'

function Edu() {
  return (
    <section className="education-section" id='education'>
      <h2 className="education-title">Education</h2>
      <p className="education-subtitle">
        My educational journey has been a path of exploration and personal development. Below are the details of my academic background.</p>
      <div className="timeline-container">
        <div className="timeline-entry">
          <div className="timeline-marker"></div>
          <div className="timeline-card">
            <h3>Diploma In Full Stack Development, Kerala</h3>
            <p className="subheading">Mern Stack Development & Mean Stack Development </p>
            <p className="duration">June 2024 - Mar 2025</p>
            <p><strong>Grade:</strong> 8.02 CGPA</p>
            <p className="description">
              As a Full Stack Development student, I am learning both the MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js) stacks, which are powerful JavaScript-based frameworks for building dynamic web applications. These stacks enable me to develop complete, responsive, and scalable web solutions from front-end to back-end.
            </p>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-marker"></div>
          <div className="timeline-card">
            <h3>Board Of Technical Education, Kerala</h3>
            <p className="subheading">Diploma Engineering at BTE, Computer Science and Engineering</p>
            <p className="duration">June 2020 - May 2023</p>
            <p><strong>Grade:</strong> 8.02 CGPA</p>
            <p className="description">
              successfuly completed Computer Science and Engineering at Board Of Technical Education, Kerala.
              have a CGPA of 8.02 with first Class Deistinction. Gained hands-on experience in web development, including HTML, CSS, JavaScript, and responsive design principles.
            </p>
          </div>
        </div>

        <div className="timeline-entry">
          <div className="timeline-marker"></div>
          <div className="timeline-card">
            <h3>National Higher Secondary School, Kerala</h3>
            <p className="subheading">HSS(XII), Science with Computer</p>
            <p className="duration">June 2018 - July 2020</p>
            <p><strong>Grade:</strong> 82%</p>
            <p className="description">
              I completed my class 12 high school education at National Higher Secondary School, Kerala,
              where I studied Science with Computer...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Edu