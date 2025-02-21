import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Typed from 'typed.js';

const Hero = () => {


  useEffect(() => {
    const options = {
      strings: [
        'A passionate developer',
        'A problem solver',
        'A web enthusiast',
        'Building amazing web applications'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    const typedInstance = new Typed('#typed-text', options);

    return () => {
      typedInstance.destroy();
    };

  }, []);

  return (
    <section 
      id="home" 
      className="hero-section py-5"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container text-center text-white">
        <div className="hero-content bg-dark p-5 rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <h2 className="display-4 mb-3">Hello, I'm Mukesh Chauhan</h2>
          <p className="lead mb-4">
            <span id="typed-text"></span>
          </p>
          <div className="hero-social-links mb-4">
            <a href="https://github.com" className="text-white me-3">
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com" className="text-white me-3">
              <FaLinkedin size={32} />
            </a>
            <a href="https://twitter.com" className="text-white">
              <FaTwitter size={32} />
            </a>
          </div>
          <a href="#projects" className="btn btn-primary btn-lg">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};


export default Hero;
