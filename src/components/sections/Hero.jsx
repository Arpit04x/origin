import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div className="hero-section" ref={ref}>
            <motion.div style={{ y, opacity }} className="hero-background">
                <div className="hero-overlay"></div>
                <img src="/assets/hero-bg.png" alt="Abstract Background" className="hero-bg-img" />
            </motion.div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-text"
                >
                    <div className="pill-badge">
                        <span>New: AI Wealth Assistant</span>
                        <ChevronRight size={14} />
                    </div>
                    <h1>
                        Own your <br />
                        <span className="text-gradient">wealth journey</span>
                    </h1>
                    <p className="hero-sub">
                        The intelligent platform for modern investors. Origin brings professional-grade insights,
                        AI forecasting, and seamless management to your personal finances.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-primary">
                            Start Free Trial
                        </button>
                        <button className="btn-outline">
                            Watch Demo <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                        </button>
                    </div>

                    <div className="hero-trust">
                        <div className="trust-item">
                            <ShieldCheck size={18} color="#3B82F6" />
                            <span>Bank-level encryption</span>
                        </div>
                        <div className="trust-item">
                            <span>Trusted by 50,000+ investors</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="hero-visual"
                >
                    {/* Abstract Phone/Card Representation */}
                    <div className="glass-card-hero">
                        <div className="card-header">
                            <div>
                                <div className="label">Total Balance</div>
                                <div className="balance">$124,592.45</div>
                            </div>
                            <div className="growth-badge">+12.4%</div>
                        </div>
                        <div className="mini-chart">
                            {/* CSS/SVG Chart */}
                            <svg viewBox="0 0 100 40" className="hero-sparkline">
                                <path d="M0,35 Q10,35 20,25 T40,20 T60,10 T80,15 T100,5" fill="none" stroke="url(#gradient)" strokeWidth="3" />
                                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </linearGradient>
                            </svg>
                        </div>
                        <div className="card-row">
                            <div className="row-item">
                                <div className="icon-box" style={{ background: 'rgba(59,130,246,0.2)' }}></div>
                                <div className="row-text">
                                    <div className="row-title">Apple Inc.</div>
                                    <div className="row-sub">AAPL • Stock</div>
                                </div>
                                <div className="row-val">+$2,400</div>
                            </div>
                            <div className="row-item">
                                <div className="icon-box" style={{ background: 'rgba(139,92,246,0.2)' }}></div>
                                <div className="row-text">
                                    <div className="row-title">Bitcoin</div>
                                    <div className="row-sub">BTC • Crypto</div>
                                </div>
                                <div className="row-val">+$8,230</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
