import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import React, { useMemo, useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import SkillCard from "../components/SkillCard";
import { skills } from "../data";

const Skills: React.FC = () => {
    const [category, setCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Get unique categories
    const categories = [
        "Programming Languages",
        "Frameworks",
        "Cloud & DevOp",
        "Databases & Caching",
        "Version Control",
        "System Architecture",
    ];

    // Filter skills based on category and search query
    const filteredSkills = useMemo(() => {
        return skills.filter((skill) => {
            const matchesCategory =
                category === null || skill.category.includes(category);
            const matchesSearch = skill.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [category, searchQuery]);

    return (
        <AnimatedSection id="skills" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-display font-bold mb-4 text-neutral-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        Skills & Expertise
                    </motion.h2>
                    <motion.p
                        className="text-neutral-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}>
                        Technologies and tools I work with to bring ideas to
                        life.
                    </motion.p>
                </div>

                {/* Search and Filter */}
                <div className="max-w-2xl mx-auto mb-10 space-y-4">
                    {/* Search */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-neutral-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search skills..."
                            className="w-full pl-10 pr-4 py-3 bg-white rounded-lg shadow-sm border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </motion.div>

                    {/* Category Filters */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}>
                        <button
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                category === null
                                    ? "bg-primary text-white"
                                    : "bg-white text-neutral-700 hover:bg-neutral-100"
                            }`}
                            onClick={() => setCategory(null)}>
                            All
                        </button>

                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    category === cat
                                        ? "bg-primary text-white"
                                        : "bg-white text-neutral-700 hover:bg-neutral-100"
                                }`}
                                onClick={() => setCategory(cat)}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${category}-${searchQuery}`}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}>
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}>
                                <SkillCard skill={skill} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredSkills.length === 0 && (
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}>
                        <p className="text-neutral-500 text-lg">
                            No skills match your criteria.
                        </p>
                        <button
                            className="mt-4 text-primary font-medium underline"
                            onClick={() => {
                                setCategory(null);
                                setSearchQuery("");
                            }}>
                            Clear filters
                        </button>
                    </motion.div>
                )}
            </div>
        </AnimatedSection>
    );
};

export default Skills;
