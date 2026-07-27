import React from "react";
import { motion } from "framer-motion";
import "../css/about.css";

function About() {
  return (
    <div className="about-container">

      
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>About Me</h2>

        <p>
          I am a passionate <span>Python Full Stack Developer</span> with hands-on
          experience in building scalable, secure, and high-performance web applications
          using <span>Django</span> and <span>React</span>. I specialize in designing
          efficient backend architectures, developing RESTful APIs, and creating
          responsive, user-friendly interfaces.
        </p>

        <p>
          My core strengths include backend development, database design,
          API integration, and full-stack application development. I focus on writing
          clean, maintainable, and scalable code that follows industry best practices.
        </p>

        <p>
          I am highly motivated to solve real-world problems, continuously learn new
          technologies, and contribute to building impactful software solutions.
        </p>
      </motion.section>

      
      <motion.section
        className="skills-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {[
            "Python","React.js","Django","Django REST API",
            "HTML","CSS","JavaScript","Responsive Design",
            "SQL / SQLite","Mongo DB","Git & GitHub","REST API Integration"
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      
      <motion.section
        className="education-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Education</h2>

        <div className="education-grid">

      

          <motion.div
            className="education-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Bachelor’s Degree</h3>
            <p>Bachelor of computer applications</p>
            <p>2022 – 2025</p>
          </motion.div>


          {/* '''<motion.div
            className="education-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>Master’s Degree</h3>
            <p>Commerce with computer applications</p>
            <p>2021 – 2023</p>
          </motion.div>'''' */}

        </div>
      </motion.section>

      
      <motion.section
        className="why-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2>Why Work With Me</h2>

        <div className="why-grid">
          {[
            {
              title: "Problem Solver",
              desc: "I build efficient solutions for real-world challenges."
            },
            {
              title: "Clean & Scalable Code",
              desc: "Maintainable, optimized, and production-ready code."
            },
            {
              title: "Full Stack Expertise",
              desc: "Strong understanding of both frontend and backend systems."
            },
            {
              title: "Continuous Learning",
              desc: "Always improving with new tools and technologies."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="why-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}

export default About;