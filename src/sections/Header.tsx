import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import AnimatedText from "../components/AnimatedText";
import Button from "../components/Button";
import { navItems } from "../data";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const { scrollY } = useScroll();
    const headerBackground = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 231, 231, 0)", "rgba(255, 231, 231, 0.9)"]
    );
    const headerShadow = useTransform(
        scrollY,
        [0, 100],
        ["0 0 0 rgba(0, 0, 0, 0)", "0 10px 30px rgba(0, 0, 0, 0.1)"]
    );

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = section.clientHeight;
                const scrollY = window.scrollY;

                if (
                    scrollY >= sectionTop - 200 &&
                    scrollY < sectionTop + sectionHeight - 200
                ) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);

        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            id="home"
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
                style={{
                    backgroundColor: headerBackground,
                    boxShadow: headerShadow,
                    backdropFilter: "blur(8px)",
                }}>
                <motion.div
                    className="font-display font-bold text-xl text-primary"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}>
                    Shubhanshu Tiwari
                </motion.div>

                {/* Desktop Menu */}
                <motion.ul
                    className="hidden md:flex items-center space-x-8"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                    }}>
                    {navItems.map((item) => (
                        <motion.li key={item.id}>
                            <a
                                href={item.href}
                                className={`relative px-2 py-1 font-medium transition-colors duration-300 ${
                                    activeSection === item.id.toLowerCase()
                                        ? "text-primary"
                                        : "text-neutral-700 hover:text-primary"
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}>
                                {activeSection === item.id.toLowerCase() && (
                                    <motion.span
                                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                                        layoutId="navIndicator"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-neutral-700 focus:outline-none"
                    onClick={handleMenuToggle}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-background flex items-center justify-center md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}>
                        <ul className="flex flex-col items-center space-y-6 py-12">
                            {navItems.map((item) => (
                                <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3 }}>
                                    <a
                                        href={item.href}
                                        className={`text-xl font-medium ${
                                            activeSection ===
                                            item.id.toLowerCase()
                                                ? "text-primary"
                                                : "text-neutral-700"
                                        }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}>
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Content */}
            <div className="container mx-auto px-6 flex flex-col items-center justify-center h-screen text-center">
                <motion.div
                    className="max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    <AnimatedText
                        text="Blending Gaming, Anime, Sports & Music"
                        tag="h2"
                        className="text-lg md:text-xl font-medium text-primary mb-4"
                    />

                    <AnimatedText
                        text="Creative Developer & Coder"
                        tag="h1"
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-neutral-800"
                        delay={0.3}
                    />

                    <AnimatedText
                        text="Crafting immersive code that blend technology and creativity"
                        tag="p"
                        className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto"
                        delay={0.6}
                    />

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}>
                        <Button
                            onClick={() => handleNavClick("#projects")}
                            size="lg">
                            View My Work
                        </Button>
                        <Button
                            onClick={() => handleNavClick("#contact")}
                            variant="outline"
                            size="lg">
                            Get In Touch
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}>
                    <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-1.5">
                        <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-primary"
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
