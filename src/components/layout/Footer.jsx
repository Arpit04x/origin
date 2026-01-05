import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container footer-content">
                <div className="footer-col brand-col">
                    <div className="logo">Origin.</div>
                    <p>© 2026 Origin Financial.</p>
                </div>
                <div className="footer-col">
                    <h4>Product</h4>
                    <a href="#">Features</a>
                    <a href="#">Intelligence</a>
                    <a href="#">Pricing</a>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Security</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
