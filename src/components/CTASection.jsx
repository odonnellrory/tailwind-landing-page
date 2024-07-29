import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => (
    <section className="relative py-20 px-4 bg-indigo-800 overflow-hidden">
        <motion.div
            className="absolute inset-0"
            style={{
                background: "linear-gradient(45deg, #4f46e5 25%, transparent 25%, transparent 50%, #4f46e5 50%, #4f46e5 75%, transparent 75%, transparent)",
                backgroundSize: "60px 60px",
                opacity: 0.1,
            }}
            animate={{
                x: [0, 60],
                y: [0, 60],
            }}
            transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
            }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                Ready to Join the Revolution?
            </motion.h2>
            <motion.p
                className="text-xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Be part of the change and shape the future with us.
            </motion.p>
            <motion.button
                className="bg-white text-indigo-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300 flex items-center mx-auto"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
                whileTap={{ scale: 0.95 }}
            >
                Join Now <ArrowRight className="ml-2" />
            </motion.button>
        </div>
    </section>
);

export default CTASection;