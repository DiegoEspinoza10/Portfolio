import React from 'react';
import './AboutMe.css';
import ProfileImage from '../Img/Me2.jpeg';
import Curriculum from '../Docs/cv.pdf';

const AboutMe = () => {
  const handleDownload = () => {
    window.open(Curriculum, '_blank');
  };

  return (
    <div className="about-me">
      <div className="about-me-content">
        <div className="image-container">
          <img src={ProfileImage} alt="Profile" />
        </div>
        <div className="text-content">
          <h2>About Me</h2>
          <p>
            I'm a 23-year-old software engineer who graduated from the Universidad Nacional de Costa Rica (UNA).
            With a strong coding background and problem-solving skills, I'm passionate about creating innovative software solutions.
            I have a lot of dedication to delivering high-quality results.
            Continuously seeking growth and learning opportunities, I strive to stay up-to-date with the latest advancements in the field.
          </p>
          <h3>Experience</h3>
          <h4>· Web developer</h4>
          <p>
            Designed and implemented a web application that was compatible with multiple browsers and devices.
            The tools our team used to create the web application were Laravel for the back-end, SQL for the database, and ReactJs for the front-end.
            My involvement mainly focused on creating the Rest API with all the necessary methods and requirements, setting up the database,
            and testing the API with Postman.
          </p>
          <button className="download-button" onClick={handleDownload}>
            Download Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;



