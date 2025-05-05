import React from 'react'
import '../project/project.css'
function Project() {

  const projects = [
    {
      title: 'Travel & Guide (MERN)',
      date: 'apr 2025',
      description: 'Engineered a dynamic travel guide platform using MongoDB, Express.js, React, and Node.js, implementing cab, bus, train, and aeroplane booking functionality.',
      tech: ['React JS', 'Express', 'Node.JS', 'MongoDB', 'Bootstrap', 'MUI'],
      image: 'travelguide.png',
      link: 'https://travel-guide-frontend-3xo2.onrender.com',

    },
    {
      title: 'Amazone-Clone (Angular)',
      date: 'Dec 2024',
      description: 'Developed a Amazone-inspired e-commerce platform using Angular for seamless front-end functionality',
      tech: ['Angular', 'Typescript', 'Scss', 'Bootstrap'],
      image: 'amazone.png',
      link: 'https://github.com/Sujith-Sukumar/Amazone-Clone.git'
    },
    {
      title: 'Agreement Pronting',
      date: 'Oct 2024',
      description: 'Developed and delivered a system for generating and printing customized agreements using JavaScript',
      tech: ['React JS', 'Firebase', 'Firestore', 'Node JS'],
      image: 'agreement.png',
      link: 'https://github.com/Sujith-Sukumar/Agreement-Printing.git'
    },
  ];
  return (
    <section className="projects-section" id='projects'>
      <h1 className="projects-title">Projects</h1>
      <p className="projects-subtitle">
        I have worked on a wide range of projects. Here are some of my projects.
      </p>
      <div className="project-filters">
        <button className="filter-btn">Web Site's</button>
      </div>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-img" />
            </a>
            <div className="tech-tags">
              {project.tech.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <h3 className="project-name">{project.title}</h3>
            <p className="project-date">{project.date}</p>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>

    </section>
  );

}

export default Project