import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import React from "react";
import Button from "../components/Button";
import { navItems, socials } from "../data";

const Footer: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer id="contact" className="bg-primary text-white">
            {/* Contact Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        className="text-white/80 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        Have a project in mind or just want to say hello? I'd
                        love to hear from you!
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}>
                        <h3 className="text-2xl font-display font-bold mb-6">
                            Contact Information
                        </h3>

                        <div className="flex items-start space-x-4">
                            <Mail className="mt-1 text-highlight" />
                            <div>
                                <h4 className="font-medium text-lg">Email</h4>
                                <a
                                    href="mailto:shubhanshutiwari74156@gmail.com"
                                    className="text-white/80 hover:text-white transition-colors">
                                    shubhanshutiwari74156@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <MapPin className="mt-1 text-highlight" />
                            <div>
                                <h4 className="font-medium text-lg">
                                    Location
                                </h4>
                                <p className="text-white/80">
                                    Kabir Nagar, Raipur(C.G)
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h4 className="font-medium text-lg mb-4">
                                Social Media
                            </h4>
                            <div className="flex space-x-4">
                                {socials.map((social) => (
                                    <motion.a
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                                        whileHover={{
                                            y: -5,
                                            transition: { duration: 0.2 },
                                        }}
                                        whileTap={{ scale: 0.95 }}>
                                        <img 
                                            src={social.icon}
                                            alt={social.name}
                                            className="w-6 h-6"     
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        className="space-y-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label
                                className="block text-sm font-medium mb-2"
                                htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-highlight/50"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium mb-2"
                                htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-highlight/50"
                                placeholder="Your email"
                            />
                        </div>

                        <div>
                            <label
                                className="block text-sm font-medium mb-2"
                                htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-highlight/50"
                                placeholder="Your message"></textarea>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-white text-black hover:bg-white/90 !text-black">
                            Send Message
                        </Button>
                    </motion.form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <div className="font-display font-bold text-xl mb-2">
                                Shubhanshu Tiwari
                            </div>
                            <p className="text-white/60 text-sm">
                                © {new Date().getFullYear()} All Rights Reserved
                            </p>
                        </div>

                        <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6 md:mb-0">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        className="text-white/80 hover:text-white transition-colors text-sm"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document
                                                .querySelector(item.href)
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                });
                                        }}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <motion.button
                            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToTop}>
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
