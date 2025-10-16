import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ onProjectClick }) => {
  const projects = [
    {
      id: 1,
      title: "WAT.ai",
      year: "2025",
      jobTitle: "Machine Learning Engineer",
      description: "Machine Learning Engineer working on AI assistant for independent and safe living",
      image: "./images/WATaiBg (1).png",
      tech: "Machine Learning, AI, Python"
    },
    {
      id: 2,
      title: "QQuote",
      year: "2025",
      jobTitle: "Software Engineering Intern",
      description: "Software Engineering Intern working on internal APIs, product management, and process improvement",
      image: "./images/QQuoteBg.png",
      tech: "Postman, Product Management, QA Testing"
    },
    {
      id: 3,
      title: "Encore Financial Ltd",
      year: "2025",
      jobTitle: "AI Software Engineer",
      description: "AI Software Engineer focused on AI & fintech innovation and development",
      image: "./images/EncoreBg (3).png",
      tech: "React.js, AI, Fintech"
    },
    {
      id: 4,
      title: "Aeon Stellar Commerce",
      year: "2025",
      jobTitle: "Full Stack Developer",
      description: "Full Stack Developer building and testing paywall designs with Stripe integration",
      image: "./images/AeonBg (4).png",
      tech: "React.js, Stripe, Full Stack"
    },
    {
      id: 5,
      title: "Gradepad",
      year: "2025",
      jobTitle: "Personal Project",
      description: "Personal project - A comprehensive grade tracking and academic management platform",
      image: "./images/gradepadrough.webp",
      tech: "React, Node.js, Database"
    },
    {
      id: 6,
      title: "QQuote",
      year: "2025",
      jobTitle: "Special Projects Engineering Assistant",
      description: "Special Projects Engineering Assistant developing analytical dashboards and supporting product management",
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
