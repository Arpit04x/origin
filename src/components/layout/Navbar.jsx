import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    Origin<span className="dot">.</span>
                </div>

                <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                    <a href="#features">Features</a>
                    <a href="#ai">Intelligence</a>
                    <a href="#about">About</a>
                    <a href="#blog">Resources</a>
                    <div className="mobile-actions">
                        <button className="btn-text">Log in</button>
                        <button className="btn-primary small">Get Started</button>
                    </div>
                </div>

                <div className="nav-actions">
                    <button className="btn-text">Log in</button>
                    <button className="btn-primary small">Get Started</button>
                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
