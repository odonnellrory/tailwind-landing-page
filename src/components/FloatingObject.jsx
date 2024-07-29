import React from 'react';
import { motion } from 'framer-motion';

const FloatingObject = ({ Icon, delay }) => (
    <motion.div
        className="absolute"
        style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
        }}
        animate={{
            y: ["-20px", "20px"],
            rotate: [0, 360],
        }}
        transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: delay,
        }}
    >
        <Icon size={24} className="text-white opacity-50" />
    </motion.div>
);

export default FloatingObject;