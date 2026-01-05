import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send } from 'lucide-react';
import './AISection.css';

const AISection = () => {
    const [messages, setMessages] = useState([
        { role: 'user', text: "How's my portfolio doing today?" },
    ]);

    useEffect(() => {
        const sequence = async () => {
            await new Promise(r => setTimeout(r, 1500));
            setMessages(p => [...p, { role: 'ai', text: "Your portfolio is up 2.4% today. Tech stocks are leading the rally." }]);

            await new Promise(r => setTimeout(r, 2500));
            setMessages(p => [...p, { role: 'user', text: "Predict my savings for 2026." }]);

            await new Promise(r => setTimeout(r, 1500));
            setMessages(p => [...p, { role: 'ai', text: "Based on current trends, your projected savings will reach $184,000 by Q4 2026. Here is the trajectory:" }]);
        };

        // Simple intersection observer or just run on load if viewed. 
        // ideally check viewport, but for simplified demo we'll let it run.
        sequence();
    }, []);

    return (
        <div className="section-padding ai-section" id="ai">
            <div className="container">
                <div className="ai-header">
                    <div className="pill-badge ai-badge">
                        <Sparkles size={14} /> Origin Intelligence
                    </div>
                    <h2>Ask <span className="text-gradient">anything.</span></h2>
                    <p>Your personal wealth analyst, available 24/7.</p>
                </div>

                <div className="ai-interface glass-panel">
                    <div className="chat-window">
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                className={`chat-message ${msg.role}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {msg.role === 'ai' && <div className="ai-avatar"><Sparkles size={12} /></div>}
                                <div className="message-bubble">
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}
                        {/* Chart widget if last message is prediction */}
                        {messages.length >= 4 && (
                            <motion.div
                                className="chat-widget glass-panel"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                            >
                                <div className="widget-header">
                                    <span>Projected Growth</span>
                                    <span className="green">+18%</span>
                                </div>
                                <div className="widget-chart-bar">
                                    <div className="bar" style={{ height: '30%' }}></div>
                                    <div className="bar" style={{ height: '45%' }}></div>
                                    <div className="bar" style={{ height: '40%' }}></div>
                                    <div className="bar" style={{ height: '60%' }}></div>
                                    <div className="bar" style={{ height: '55%' }}></div>
                                    <div className="bar active" style={{ height: '85%' }}></div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="chat-input-area">
                        <input type="text" placeholder="Ask about your finances..." disabled />
                        <button className="send-btn"><Send size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AISection;
