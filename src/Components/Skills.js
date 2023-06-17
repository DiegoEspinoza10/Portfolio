import React from 'react';
import './Skills.css';
import '../App.css';

function Skills() {
  const skills = [
    {
      title: 'Python development',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
      text: 'Experience using python with OOP, also using modules and frameworks like Django and Django Rest Framework.',
    },
    {
        title: 'Java Development', 
        image: 'https://www.wizcase.com/wp-content/uploads/2021/08/java-runtime-environment-logo.jpg',
        text: 'Experience developing web and desktop applications.',
    },
    {
        title: 'Php Development',
        image: 'https://ih1.redbubble.net/image.439203201.3965/flat,800x800,075,f.u3.jpg',
        text: 'Experience developing Backend Rest APIs with JWT security.',
    },
    {
        title: 'JavaScript development',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
        text: 'Experience developing JavaScript applications and web applications using vanilla HTML and CSS',
    },
    {
        title: 'Backend development',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png',
        text: 'Experience creating REST APIs with frameworks like: Django Rest Framework, Laravel and Spring Boot. Also implementing security with JWT.',
    },
    {
        title: 'Frontend development',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        text: 'Experience developing frontend using advanced technologies such as React but also basic technologies as HTML, CSS, JavaScript and BootStrap.',
    },
    {
        title: 'Database management',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
        text: 'Postgresql And none SQL databases as MongoDB',
    },
    {
        title: 'Mobile development',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1200px-Android_robot.svg.png',
        text: 'Experience developing Android application with Kotlin and AndroidStudio.',
    },
    {
        title: 'Git/Github',
        image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
        text: 'Experience using Git and Github for version control.',
    },
    {
        title: 'API Testing',
        image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/postman-icon.png',
        text: 'Experience testing APIs with Postman.',
    },
  ];

  const renderSkills = () => {
    const rows = [];
    let row = [];

    for (let i = 0; i < skills.length; i++) {
      const skill = skills[i];
      row.push(
        <div className="card" key={i}>
          <div className="card-body">
            <img src={skill.image} className="card-img-top" alt={skill.title} />
            <h5 className="card-title">{skill.title}</h5>
            <p className="card-text">{skill.text}</p>
          </div>
        </div>
      );

      if ((i + 1) % 4 === 0 || i === skills.length - 1) {
        rows.push(<div className="card-group" key={i}>{row}</div>);
        row = [];
      }
    }

    return rows;
  };

  return (
    <div className="skills-container">
      <h1>My skills</h1>
      {renderSkills()}
    </div>
  );
}

export default Skills;