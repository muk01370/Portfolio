import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    { 
      title: 'E-Commerce Platform', 
      description: 'Full-featured e-commerce website with React and Node.js',
      image: '/images/projects/ecommerce.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: '#',
      demo: '#',
      category: 'web'
    },
    { 
      title: 'Task Manager', 
      description: 'Real-time task management app with Firebase integration',
      image: '/images/projects/taskmanager.jpg',
      tech: ['React', 'Firebase', 'Material UI'],
      github: '#',
      demo: '#',
      category: 'web'
    },
    { 
      title: 'Portfolio Website', 
      description: 'Responsive personal portfolio built with Bootstrap',
      image: '/images/projects/portfolio.jpg',
      tech: ['Bootstrap', 'React', 'SCSS'],
      github: '#',
      demo: '#',
      category: 'web'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="h3 mb-4 text-center">Featured Projects</h2>
        
        <div className="filter-buttons text-center mb-4">
          <button 
            className={`filter-btn btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn btn ${activeFilter === 'web' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveFilter('web')}
          >
            Web
          </button>
        </div>

        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card project-card h-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title h5">{project.title}</h3>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge tech-badge">{tech}</span>
                    ))}
                  </div>
                  <p className="card-text">{project.description}</p>
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      className="btn btn-outline-dark"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      className="btn btn-primary"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
