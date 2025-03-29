import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../constants/project";

const Projects = () => {
  const stars = useMemo(() => {
    return [...Array(75)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1b2d] opacity-80 z-0"></div>

      {/* Lightning Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] opacity-30 animate-pulse z-0"></div>

      {/* Stars Container */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] overflow-hidden">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white opacity-70 rounded-full"
            style={{
              top: star.top,
              left: star.left,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: parseFloat(star.delay),
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>

        {/* Animated Project Cards with Hover Effect */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
