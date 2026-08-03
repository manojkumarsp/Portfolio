import React from "react";
import { motion } from "framer-motion";
import "../css/projects.css";

function Projects() {

  const projects = [
    {
      title: "College ERP System",
      description: "College ERP System with Django and React",
      github: "https://github.com/manojkumarsp/erp-project"
    },
    {
      title: "Online Voting System",
      description: "Secure online voting with real-time election results.",
      github: "https://github.com/manojkumarsp/online_voting_system"
    },
  
    {
      title: "Portfolio",
      description: "Fully responsive portfolio developed using React.js",
      github: "https://github.com/manojkumarsp/Portfolio"
    },
  ];

  return (

    <div className="projects-container">

      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="project-card"

            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="view-link">View on GitHub →</span>

          </motion.a>

        ))}

      </div>

    </div>

  );
}

export default Projects;