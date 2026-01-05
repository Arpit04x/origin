import React from 'react';
import './FooterCTA.css';

const FooterCTA = () => {
    return (
        <div className="footer-cta-section">
            <div className="cta-background">
                <img src="/assets/nature-bg.png" alt="Nature" />
                <div className="cta-overlay"></div>
            </div>

            <div className="container cta-content">
                <div className="glow-circle"></div>
                <h2>Manage money <br /><em>together.</em></h2>
                <p>Join the future of wealth management today.</p>
                <div className="app-buttons">
                    <button className="btn-store apple">
                        App Store
                    </button>
                    <button className="btn-store google">
                        Google Play
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FooterCTA;
