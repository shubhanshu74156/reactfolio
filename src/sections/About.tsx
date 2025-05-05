import { motion } from "framer-motion";
import { Dumbbell, Gamepad2, Music, Tv } from "lucide-react";
import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import ProgressBar from "../components/ProgressBar";
import { interests } from "../data";

const About: React.FC = () => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "lucide-gamepad-2":
                return <Gamepad2 className="text-primary" size={24} />;
            case "lucide-music":
                return <Music className="text-primary" size={24} />;
            case "lucide-tv":
                return <Tv className="text-primary" size={24} />;
            case "lucide-dumbbell":
                return <Dumbbell className="text-primary" size={24} />;
            default:
                return null;
        }
    };

    return (
        <AnimatedSection id="about" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Avatar/Image */}
                    <motion.div
                        className="w-full md:w-5/12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}>
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-primary to-accent rounded-full overflow-hidden border-4 border-white shadow-xl">
                                <img
                                    src="public\SAVE_20230925_122554.jpg"
                                    alt="Shubhanshu Tiwari"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative elements */}
                            <motion.div
                                className="absolute -right-4 -top-4 w-20 h-20 bg-highlight rounded-full opacity-30"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -left-4 -bottom-4 w-16 h-16 bg-accent rounded-full opacity-20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{ duration: 7, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="w-full md:w-7/12">
                        <motion.h2
                            className="text-3xl md:text-4xl font-display font-bold mb-6 text-neutral-800"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}>
                            About Me
                        </motion.h2>

                        <motion.p
                            className="text-neutral-600 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            I am a passionate Full Stack Web Developer with a
                            strong foundation in modern frontend and backend
                            technologies, and a proven track record of
                            delivering dynamic, user-centric web applications.
                            With experience in building responsive and scalable
                            solutions, I specialize in technologies like
                            React.js, Node.js, MongoDB, and Tailwind CSS, along
                            with a solid grasp of REST APIs and real-time
                            applications.
                        </motion.p>

                        <motion.p
                            className="text-neutral-600 mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}>
                            I have led multiple project initiatives from concept
                            to deployment, demonstrating leadership, attention
                            to detail, and a collaborative approach. My work
                            reflects a blend of design sensibility and technical
                            proficiency, consistently focused on creating
                            seamless and engaging user experiences.
                        </motion.p>

                        <div className="space-y-4">
                            <motion.h3
                                className="text-xl font-display font-bold text-neutral-800"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}>
                                My Interests
                            </motion.h3>

                            <div className="space-y-4">
                                {interests.map((interest, index) => (
                                    <motion.div
                                        key={interest.id}
                                        className="flex items-center gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + index * 0.1,
                                        }}>
                                        <div className="p-2 bg-background rounded-full">
                                            {getIcon(interest.icon)}
                                        </div>
                                        <div className="flex-1">
                                            <ProgressBar
                                                value={interest.level}
                                                label={interest.name}
                                                color={
                                                    index % 2 === 0
                                                        ? "bg-primary"
                                                        : "bg-accent"
                                                }
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default About;
