import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      <motion.div
        className="home-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/profile.jpg"
          alt="profile"
          className="profile-img"
        />
      </motion.div>

      <motion.div
        className="home-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h3 className="hi">Hi, I'm 👋</h3>

        <h1 className="name">MANOJKUMAR SP</h1>

        <TypeAnimation
          sequence={[
            "🐍 Python Full Stack Developer",
            2000,

            "⚡ Django Developer",
            2000,

            "⚛️ React Developer",
            2000,

            "🔗 REST API Developer",
            2000,

            "💻 Backend Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing-role"
        />

        <p className="home-description">
          Passionate about building scalable web applications,
          REST APIs, and modern user experiences using
          Python, Django, React, and SQL.
        </p>

        <div className="home-buttons">

          <Link to="/projects">
            <button className="btn view_project">
              🚀 View Projects
            </button>
          </Link>

        </div>

      </motion.div>

    </div>
  );
}

export default Home;