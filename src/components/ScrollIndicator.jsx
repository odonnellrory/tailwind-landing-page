import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => (
    <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
        <ChevronDown size={32} />
    </motion.div>
);

export default ScrollIndicator;