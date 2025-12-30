import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "CROP Recommendation System 🌾",
    desc: "Machine learning–based crop prediction using soil nutrients and environmental parameters.",
    ss: "/mamo.png",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    live: "#",
    code: "#",
  },
  {
    title: "🧠 Logic Lab – Digital Logic Web Application",
    desc: "Interactive web platform for learning and visualizing digital logic concepts.",
    ss: "/mentalhealth.jpg",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    live: "https://logic-lab-de.netlify.app/",
    code: "https://github.com/Classy-beatz05/logic-lab-app",
  },
  {
    title: "📡 ESP32 AP Hunter",
    desc: "Embedded Wi-Fi scanning tool for detecting nearby access points and suspicious networks.",
    ss: "/ISL.png",
    tech: ["ESP32", "Embedded C", "Wi-Fi Networking"],
    live: "#",
    code: "#",
  },
  {
    title: "✋ Hand Gesture–Based Volume Controller",
    desc: "Computer vision–based system for touch-free volume control using hand gestures.",
    ss: "/portfolio.jpg",
    tech: ["Python", "OpenCV", "MediaPipe"],
    live: "#",
    code: "https://github.com/Classy-beatz05/Volume-Control.py",
  },
  {
    title: "💬 AI Chatbot Application",
    desc: "Rule-based and NLP-driven chatbot for interactive user query handling.",
    ss: "/Docuchat.png",
    tech: ["HTML", "CSS", "JavaScript", "NLP"],
    live: "#",
    code: "https://github.com/Classy-beatz05/AI-Chatbot",
  },
  {
    title: "🎮 Hangman Game",
    desc: "Command-line word guessing game with randomized words and replay functionality.",
    ss: "/ProfileX.png",
    tech: ["python"],
    live: "#",
    code: "https://github.com/Classy-beatz05/CodeAlpha_Task1",
  },
  {
    title: "📂 Automated File Organizer",
    desc: "Python script to automatically categorize and organize files by type.",
    ss: "/breastpred.jpg",
    tech: ["Python", "OS", "Shutil"],
    live: "#",
    code: "https://github.com/Classy-beatz05/CodeAlpha_Task3",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
