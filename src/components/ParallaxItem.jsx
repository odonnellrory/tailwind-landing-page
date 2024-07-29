import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ParallaxItem = ({ children, speed = 10 }) => {
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const { scrollY } = useViewportScroll();

    useEffect(() => {
        const element = document.getElementById("parallax-wrapper");
        setElementTop(element.offsetTop);
        setClientHeight(window.innerHeight);
    }, []);

    const y = useTransform(scrollY, [elementTop - clientHeight, elementTop + clientHeight],
        ["0%", `${speed}%`]);

    return <motion.div style={{ y }}>{children}</motion.div>;
};

export default ParallaxItem;