import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ onProjectClick }) => {
  const projects = [
    {
      id: 1,
      title: "WAT.ai",
      year: "2025",
      timeline: "Sep. 2025 - Present",
      jobTitle: "Machine Learning Engineer",
      description: "Building FORTif.ai, an AI-driven companion for senior independence. Developing computer vision models for real-time hazard detection and intelligent chatbot systems for medication reminders and wellness check-ins.",
      image: "./images/WATaiBg (1).png",
      tech: "Python, Computer Vision, YOLO, OpenCV, LLMs, Whisper, Flask, TensorFlow, PyTorch"
    },
    {
      id: 2,
      title: "QQuote",
      year: "2025",
      timeline: "Sep. 2025 - Dec. 2025",
      jobTitle: "Software Engineering Intern",
      description: "Return internship focused on API development and QA automation. Designed specifications for new APIs to automate dealership processes and implemented Cypress.io test suites to streamline quality assurance workflows.",
      image: "./images/QQuoteBg.png",
      tech: "Postman, QA Automation, Cypress.io, PHP"
    },
    {
      id: 3,
      title: "Encore Financial Ltd",
      year: "2025",
      timeline: "Jun. 2025 - Present",
      jobTitle: "AI Software Engineer",
      description: "Building an AI-powered financial platform for investment research, portfolio management, and wealth tracking. Developing React dashboards with real-time market data, AI-generated insights, and secure user authentication.",
      image: "./images/EncoreBg (7).png",
      tech: "TypeScript, React, Node.js, AI Integration, PDF Processing, Tailwind CSS"
    },
    {
      id: 4,
      title: "Aeon Stellar Commerce",
      year: "2025",
      timeline: "Jun. 2025 - Aug. 2025",
      jobTitle: "Full Stack Developer",
      description: "Developed subscription paywall system for StellaEats, Canada's first dietary-first AI-powered food marketplace. Integrated Stripe payments with Firebase authentication and built access control logic for free trial, standard, and premium tiers.",
      image: "./images/AeonBg (4).png",
      tech: "React.js, Stripe, Firebase, Figma, API Integration, Payment Systems, Subscription Management, UX Design"
    },
    {
      id: 5,
      title: "Gradepad",
      year: "2025",
      timeline: "Jan. 2025 - Apr. 2025",
      jobTitle: "Personal Project",
      description: "My first full-stack web application—a comprehensive grade tracking platform that solved my own problem as a student. Built with user authentication, real-time grade calculations, and a semester-wide dashboard view.",
      image: "./images/gradepadtempbg.jpg",
      tech: "HTML, CSS, JavaScript, PHP, MySQL"
    },
    {
      id: 6,
      title: "QQuote",
      year: "2025",
      timeline: "Jan. 2025 - Apr. 2025",
      jobTitle: "Special Projects Engineering Assistant",
      description: "First co-op term focused on product management and the full product lifecycle. Created feature specifications, designed wireframes and mockups, conducted QA testing, and wrote internal documentation to support team processes.",
      image: "./images/QQuoteBg.png",
      tech: "Figma, Product Management, Analytics"
    }
  ]

  return (
    <section className="projects">
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onProjectClick={onProjectClick} />
        ))}
      </div>
    </section>
  )
}

export default Projects
