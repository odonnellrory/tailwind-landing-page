import React from 'react';
import { motion } from 'framer-motion';
import ParallaxItem from './ParallaxItem';

const HeroSection = ({ scrollY }) => (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParallaxItem speed={-20}>
            <div className="z-10 text-center">
                <motion.h1
                    className="text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to the Future
                </motion.h1>
                <motion.p
                    className="text-xl mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Explore the possibilities of tomorrow, today.
                </motion.p>
                <motion.button
                    className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </div>
        </ParallaxItem>
        <motion.div
            className="absolute inset-0 z-0"
            style={{
                background: `radial-gradient(circle, rgba(139,92,246,0.3) ${scrollY / 5}px, transparent ${scrollY / 2}px)`,
            }}
        />
    </header>
);

export default HeroSection;