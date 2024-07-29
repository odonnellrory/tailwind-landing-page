// src/components/FloatingObject.js
import React from 'react';
import { motion } from 'framer-motion';

const FloatingObject = ({ Icon, delay }) => (
    <motion.div
        className="fixed" // Changed from "absolute" to "fixed"
        style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            pointerEvents: 'none', // Ensure it doesn't interfere with user interactions
        }}
        animate={{
            y: ["-20px", "20px"],
            rotate: [0, 360],
        }}
        transition={{
            duration: 5, // Increased duration for slower animation
            repeat: Infinity,
            repeatType: "reverse",
            delay: delay,
            ease: "easeInOut", // Added easing for smoother motion
        }}
    >
        <Icon size={24} className="text-white opacity-50" />
    </motion.div>
);

export default FloatingObject;