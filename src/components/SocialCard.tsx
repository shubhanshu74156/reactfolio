import { motion } from "framer-motion";
import React from "react";
import { Social } from "../types";

interface SocialCardProps {
    social: Social;
}

const SocialCard: React.FC<SocialCardProps> = ({ social }) => {
    return (
        <motion.a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.2 }}>
            <div className="p-2 bg-neutral-50 rounded-full">
                <img 
                    src={social.icon}
                    alt={social.name}
                    className="w-6 h-6"
                />
            </div>
            <div className="flex-1">
                <h3 className="font-medium text-neutral-800">{social.name}</h3>
            </div>
        </motion.a>
    );
};

export default SocialCard; 