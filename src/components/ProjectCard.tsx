import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-2">
            {project.codeUrl && (
              <motion.a 
                href={project.codeUrl}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} />
              </motion.a>
            )}
            {project.demoUrl && (
              <motion.a 
                href={project.demoUrl}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-block px-2 py-1 text-xs font-medium bg-highlight/20 text-primary rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-display font-bold mb-2 text-neutral-800">{project.title}</h3>
        <p className="text-neutral-600 text-sm mb-4 flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="inline-block text-xs text-neutral-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;