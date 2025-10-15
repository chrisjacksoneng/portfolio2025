import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "WAT.ai - Machine Learning Engineer",
      year: "2025",
      description: "Machine Learning Engineer working on AI assistant for independent and safe living",
      image: "/images/watairough.png",
      tech: "Machine Learning, AI, Python"
    },
    {
      id: 2,
      title: "QQuote - Software Engineering Intern",
      year: "2025",
      description: "Software Engineering Intern working on internal APIs, product management, and process improvement",
      image: "/images/qqrough.png",
      tech: "Postman, Product Management, QA Testing"
    },
    {
      id: 3,
      title: "Encore - AI Software Engineer",
      year: "2025", 
      description: "AI Software Engineer focused on AI & fintech innovation and development",
      image: "/images/EncoreBg (3).png",
      tech: "React.js, AI, Fintech"
    },
    {
      id: 4,
      title: "Aeon - Full Stack Developer",
      year: "2024",
      description: "Full Stack Developer building and testing paywall designs with Stripe integration",
      image: "/images/aeonrough.png",
      tech: "React.js, Stripe, Full Stack"
    },
    {
      id: 5,
      title: "Gradepad",
      year: "2024",
      description: "Personal project - A comprehensive grade tracking and academic management platform",
      image: "/images/gradepadrough.webp",
      tech: "React, Node.js, Database"
    },
    {
      id: 6,
      title: "QQuote - Special Projects Engineering Assistant",
      year: "2024",
      description: "Special Projects Engineering Assistant developing analytical dashboards and supporting product management",
      image: "/images/qqrough.png",
      tech: "Figma, Product Management, Analytics"
    }
  ]

  return (
    <section className="projects">
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
