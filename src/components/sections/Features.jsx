import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Lock, Globe } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <BarChart3 size={32} />,
        title: "Advanced Analytics",
        desc: "Visualize your cash flow with institutional-grade charts and reports.",
        color: "blue"
    },
    {
        icon: <Lock size={32} />,
        title: "Encrypted Security",
        desc: "Your data is protected by military-grade 256-bit encryption.",
        color: "purple"
    },
    {
        icon: <Globe size={32} />,
        title: "Global Access",
        desc: "Manage your assets from anywhere in the world, 24/7 support.",
        color: "cyan"
    }
];

const Features = () => {
    return (
        <div className="features-section container" id="features">
            <div className="features-grid">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="feature-card glass-panel"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className={`feature-icon icon-${f.color}`}>
                            {f.icon}
                        </div>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Features;
