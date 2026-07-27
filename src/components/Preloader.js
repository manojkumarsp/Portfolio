import React from "react";
import { motion } from "framer-motion";
import "../css/preloader.css";

function Preloader() {
  return (
    <div className="preloader">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="logo-code">&lt;/&gt;</h1>
      </motion.div>

      <div className="typing-container">
        <h2 className="typing-text">
          Manojkumar SP 
        </h2>
      </div>

      <p className="loading-text">
        CODE - CREATE - CONQUER
      </p>

    </div>
  );
}

export default Preloader;