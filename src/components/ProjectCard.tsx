import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}


const ProjectCard = ({
  title,
  description,
  image,
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
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 flex items-center justify-center">
          <motion.h3
            className="text-3xl font-[800] text-white text-center px-6 transition-transform duration-300 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            {title}
          </motion.h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-white/80 font-[500] leading-relaxed mb-8">
          {description}
        </p>

        {/* Link and Technologies */}
        <div className="mt-auto">
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-[500] mb-8"
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
                {/* Background Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent)] opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
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
