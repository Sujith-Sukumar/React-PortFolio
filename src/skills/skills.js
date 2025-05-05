import React from 'react'
import '../skills/skill.css'
function Skills() {

  const skills = {
    Frontend: [
      {name: 'React', icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",},
      {name: 'Redux', icon: "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",},
      { name: 'Angular', icon: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' },
      { name: 'HTML 5', icon: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' },
      { name: 'CSS 3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'JavaScript (Es6+)', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
    ],
    Backend: [
      { name: 'Node Js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
      { name: 'Express Js', icon: "https://img.icons8.com/color/48/000000/express-js.png" },
      { name: 'Typescript', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
      // { name: 'MySQL', icon: '💾' },
      { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      // { name: 'Firebase', icon: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
    ],
    Others: [
      { name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
      { name: 'GitHub', icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
      { name: 'Postman', icon: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
      { name: 'Render', icon: '🚀' },
      { name: 'Sass', icon: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg' },
      { name: 'Less', icon: '📘' },
      { name: 'Agile', icon: '📆' },
      { name: 'Material UI', icon: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg' },
    ],
  };
  return (
    <section className="skills-section" id='skills'>
      <h2>Skills</h2>
      <p>
        Here are some of my skills on which I have been learning on for the
        past 1 year.
      </p>
      <div className="skills-wrapper">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-box">
            <h3>{category}</h3>
            <div className="skill-grid">
              {items.map((skill) => (
                <div key={skill.name} className="skill-card">
                  <span className="skill-icon">
                    {typeof skill.icon === 'string' ? (
                      skill.icon.startsWith('data:image') || skill.icon.startsWith('http') ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          style={{ width: '24px', height: '24px', marginRight: '8px' }}
                        />
                      ) : (
                        skill.icon
                      )
                    ) : (
                      <skill.icon />
                    )}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

}

export default Skills