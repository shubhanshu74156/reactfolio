import { motion } from "framer-motion";
import {
    Cloud,
    LayoutGrid,
    Palette,
    Settings,
    Star,
    StarOff,
} from "lucide-react";
import React from "react";
import { Skill } from "../types";

interface SkillCardProps {
    skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    // Determine icon based on category
    const getIcon = (skill: Skill) => {
        if (skill.category.includes("Frameworks")) {
            return <Palette className="text-highlight" />;
        }
        if (skill.category.includes("System Architecture")) {
            return <LayoutGrid className="text-yellow-500" />;
        }
        if (skill.category.includes("Cloud & DevOp")) {
            return <Cloud className="text-blue-500" />;
        }
        if (skill.category.includes("Version Control")) {
            return <Settings className="text-gray-500" />;
        }
        return <LayoutGrid className="text-neutral-500" />;
    };
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

    return (
        <motion.div
            className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4"
            whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.2 }}>
            <div className="p-2 bg-neutral-50 rounded-full">
                {getIcon(skill)}
            </div>

            <div className="flex-1">
                <h3 className="font-medium text-neutral-800">{skill.name}</h3>
                <div className="flex mt-1">{renderStars()}</div>
            </div>
        </motion.div>
    );
};

export default SkillCard;
