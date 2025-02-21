import React from 'react';
import './About.css';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

const About = () => {
  const skills = {
    frontend: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express', 'REST APIs'],
    database: ['MongoDB', 'PostgreSQL', 'Firebase'],
    tools: ['Git', 'Webpack', 'Jest', 'Docker']
  };

  const experience = [
    {
      year: '2022 - Present',
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Developed and maintained web applications using MERN stack.'
    },
    {
      year: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Web Creators LLC',
      description: 'Implemented responsive designs and optimized web performance.'
    }
  ];

  const interests = ['Coding', 'Open Source', 'Photography', 'Hiking', 'Reading'];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="text-center">
          <img src="/images/profile.jpeg" alt="Profile" className="profile-pic" />
          <h2 className="h3 mb-4">About Me</h2>
          <p className="lead mb-5">
            I'm a full-stack developer with 3+ years of experience in building scalable web applications.
            Passionate about creating efficient, user-friendly solutions using modern technologies.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-item">
            <h3 className="h5 mb-3"><FaReact className="me-2" />Frontend</h3>
            <ul className="list-unstyled">
              {skills.frontend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="h5 mb-3"><FaNodeJs className="me-2" />Backend</h3>
            <ul className="list-unstyled">
              {skills.backend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="h5 mb-3"><FaDatabase className="me-2" />Database</h3>
            <ul className="list-unstyled">
              {skills.database.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skill-item">
            <h3 className="h5 mb-3"><FaTools className="me-2" />Tools</h3>
            <ul className="list-unstyled">
              {skills.tools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="timeline">
          {experience.map((item, index) => (
            <div className="timeline-item" key={index}>
              <h3 className="h5">{item.title}</h3>
              <p className="text-muted mb-1">{item.company} | {item.year}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <h3 className="h5 mb-3">Personal Interests</h3>
          <div>
            {interests.map((interest, index) => (
              <span key={index} className="badge interest-badge">{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;
