import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="glassmorphic overflow-hidden rounded-2xl group h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h3
        className="text-2xl font-[800] text-white text-left px-6 pt-6"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>

      {/* Card Content */}
      <div className="p-6 pt-2 flex-grow flex flex-col">
        <p className="text-white/80 font-[500] leading-relaxed mb-6">
          {description}
        </p>

        {/* Link and Technologies */}
        <div className="mt-auto">
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-[500] mb-6"
              whileHover={{ scale: 1.05 }}
            >
              View Project <ExternalLink size={16} />
            </motion.a>
          )}

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 rounded-sm bg-white/10 text-white/90 text-sm font-[500] relative overflow-hidden transition-all duration-300"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 10px rgba(255,255,255,0.3)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
