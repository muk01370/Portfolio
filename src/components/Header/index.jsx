import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navLinks = [
        { path: '/', text: 'Home', id: 'home' },
        { path: '/about', text: 'About', id: 'about' },
        { path: '/projects', text: 'Projects', id: 'projects' },
        { path: '/contact', text: 'Contact', id: 'contact' }
    ];

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <a href="/" className="logo">My Portfolio</a>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        <ul className="nav-links">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <NavLink 
                                        to={link.path} 
                                        className={({ isActive }) => `text-white text-decoration-none ${isActive ? 'active-link' : ''}`}
                                        onClick={(e) => {
                                            if (link.path.startsWith('/#')) {
                                                handleScroll(e, link.id);
                                            }
                                        }}
                                    >
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="header-actions">
                        <button 
                            className="mobile-menu-toggle"
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle navigation"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="mobile-menu">
                        <ul className="mobile-nav-links">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <NavLink 
                                        to={link.path} 
                                        className={({ isActive }) => `text-white text-decoration-none d-block p-2 ${isActive ? 'active-link' : ''}`}
                                        onClick={(e) => {
                                            if (link.path.startsWith('/#')) {
                                                handleScroll(e, link.id);
                                            }
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
