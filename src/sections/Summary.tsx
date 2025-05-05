import { motion } from "framer-motion";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const Summary: React.FC = () => {
    return (
        <AnimatedSection className="bg-primary text-white py-24">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-display font-bold mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}>
                    My Mission
                </motion.h2>

                <motion.p
                    className="text-xl md:text-2xl font-medium leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}>
                    I blend code, design, and creativity to build meaningful
                    digital experiences that resonate with people.
                </motion.p>

                <motion.p
                    className="text-lg opacity-90 leading-relaxed mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}>
                    My diverse interests in gaming, anime, sports, and music
                    influence my approach to development, allowing me to create
                    unique solutions that stand out in an increasingly digital
                    world.
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center gap-4 mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
                        <div className="font-display font-bold text-4xl mb-1">
                            2+
                        </div>
                        <div className="text-sm">Years Experience</div>
                    </div>

                    <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
                        <div className="font-display font-bold text-4xl mb-1">
                            6+
                        </div>
                        <div className="text-sm">Projects Completed</div>
                    </div>

                    <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
                        <div className="font-display font-bold text-4xl mb-1">
                            3+
                        </div>
                        <div className="text-sm">Happy Clients</div>
                    </div>

                    <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
                        <div className="font-display font-bold text-4xl mb-1">
                            ∞
                        </div>
                        <div className="text-sm">Creative Ideas</div>
                    </div>
                </motion.div>
            </div>
        </AnimatedSection>
    );
};

export default Summary;
