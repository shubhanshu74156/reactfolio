import { motion } from "framer-motion";
import {
    Star,
    StarOff
} from "lucide-react";
import React from "react";
import { Skill } from "../types";
interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    // Generate stars based on level
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= skill.level) {
                stars.push(
                    <Star
                        key={i}
                        size={14}
                        className="text-primary fill-primary"
                    />
                );
            } else {
                stars.push(
                    <StarOff key={i} size={14} className="text-neutral-300" />
                );
            }
        }
        return stars;
    };

    const getIconUrl = (icon: string) => {
        if (icon === "amazonwebservices") {
            return "https://icon2.cleanpng.com/lnd/20241122/ve/85ee4860600f5fcfcd3ed203d10cd5.webp";
        }
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.toLowerCase()}/${icon.toLowerCase()}-original.svg`;
    };

    return (
        <motion.div
            className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4"
            whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.2 }}>
            <div className="p-2 bg-neutral-50 rounded-full">
                <img 
                    src={getIconUrl(skill.icon)}
                    alt={skill.name}
                    className="w-6 h-6"
                />
            </div>

            <div className="flex-1">
                <h3 className="font-medium text-neutral-800">{skill.name}</h3>
                <div className="flex mt-1">{renderStars()}</div>
            </div>
        </motion.div>
    );
};

export default SkillCard;
