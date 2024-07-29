import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className="relative py-20 px-4" id="parallax-wrapper">
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                    opacity: 0.1,
                }}
            />
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Our Features
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {['Innovative', 'Sustainable', 'Connected'].map((feature, index) => (
                        <motion.div
                            key={feature}
                            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg"
                            initial={{ opacity: 0, y: 50, rotateY: 90 }}
                            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            whileHover={{ scale: 1.05, rotateY: 10 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
                            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;