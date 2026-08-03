import React, { useState } from "react";
import "../css/contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import axios from "axios";




function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(
      // "https://portfolio-backend-y883.onrender.com/api/contact/",
      formData
    );

    alert(response.data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {

    console.log(error.response);

    alert("Error submitting form");

  }

};
  return (
    <div className="contact-container">

      {/* TITLE */}
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to reach out through any platform below
      </motion.p>

      {/* MAIN CONTENT */}
      <div className="contact-wrapper">

        {/* LEFT - CONTACT FORM */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

        </motion.form>

        {/* RIGHT - CONTACT CARDS */}
        <div className="contact-grid">

          {/* EMAIL */}
          <motion.a
            href="mailto:manojkumarbca06@gmail.com"
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaEnvelope />
            <h3>Email</h3>
            <p>manojkumarbca06@gmail.com</p>
          </motion.a>

          {/* PHONE */}
          <motion.a
            href="tel:+919597877674"
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FaPhoneAlt />
            <h3>Phone</h3>
            <p>+91 95978 77674</p>
          </motion.a>

          {/* WHATSAPP */}
          <motion.a
            href="https://wa.me/9597877674"
            target="_blank"
            rel="noreferrer"
            className="contact-card whatsapp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FaWhatsapp />
            <h3>WhatsApp</h3>
            <p>Chat with me</p>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            href="https://github.com/manojkumarsp"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <FaGithub />
            <h3>GitHub</h3>
            <p>View my projects</p>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="www.linkedin.com/in/manojkumar-sp"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaLinkedin />
            <h3>LinkedIn</h3>
            <p>Connect professionally</p>
          </motion.a>

        </div>

      </div>

    </div>
  );
}

export default Contact;