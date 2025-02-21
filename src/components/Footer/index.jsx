import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Connect With Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2025 My Portfolio. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};


export default Footer
