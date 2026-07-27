import React from "react";
import "../css/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        
        <div className="footer-social">
          <h3>Connect</h3>

          <a href="https://github.com/manojkumarsp" target="_blank" rel="noreferrer" className="social-item github">
            <FaGithub /> GitHub
          </a>

          <a href="www.linkedin.com/in/manojkumar-sp" target="_blank" rel="noreferrer" className="social-item linkedin">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="mailto:manojkumarbca06@gmail.com" className="social-item email">
            <FaEnvelope /> Email
          </a>

          
          <a href="https://wa.me/9597877674"
            target="_blank"
            rel="noreferrer"
            className="social-item whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>

        </div>

      </div>

      
      <div className="footer-bottom">
        <p>© 2026 Manojkumar SP | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;