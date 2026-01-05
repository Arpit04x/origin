import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Showcase.css';

const sections = [
    {
        title: "Simplify your money",
        desc: "Connect all your accounts in one place. Your bank accounts, investments, crypto, and cards—unified.",
        features: ["Real-time syncing", "Bank-level security", "Unified dashboard"],
        image: "/assets/app-ui.png",
        align: "left"
    },
    {
        title: "Track everything",
        desc: "Get deep insights into your spending habits with AI-categorized transactions and smart budgeting.",
        features: ["Smart categorization", "Custom budgets", "Spending alerts"],
        image: "/assets/app-ui.png",
        align: "right"
    },
    {
        title: "Grow your money",
        desc: "Automated investing strategies tailored to your goals. Let our AI manage your portfolio while you sleep.",
        features: ["Auto-rebalancing", "Tax-loss harvesting", "Goal-based investing"],
        image: "/assets/app-ui.png",
        align: "left"
    }
];

const Showcase = () => {
    return (
        <div className="showcase-container">
            {sections.map((item, index) => (
                <section key={index} className={`showcase-section ${item.align === 'right' ? 'reverse' : ''}`}>
                    <div className="container showcase-inner">
                        <motion.div
                            className="showcase-content"
                            initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <ul className="feature-list">
                                {item.features.map((feat, i) => (
                                    <li key={i}>
                                        <CheckCircle2 size={20} className="check-icon" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn-outline">Learn More</button>
                        </motion.div>

                        <motion.div
                            className="showcase-visual"
                            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="glow-behind"></div>
                            <img src={item.image} alt={item.title} className="showcase-img" />
                        </motion.div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Showcase;
