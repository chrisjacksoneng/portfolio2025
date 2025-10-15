import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "QQuote - Software Engineering Assistant",
      year: "2025",
      description: "Software Engineering Intern working on internal APIs, product management, and process improvement",
      image: "https://picsum.photos/600/400?random=1",
      tech: "Postman, Product Management, QA Testing"
    },
    {
      id: 2,
      title: "Encore - AI Software Engineer",
      year: "2025", 
      description: "AI Software Engineer focused on AI & fintech innovation and development",
      image: "https://picsum.photos/600/400?random=2",
      tech: "React.js, AI, Fintech"
    },
    {
      id: 3,
      title: "Project Gamma",
      year: "2024",
      description: "AI-powered productivity dashboard with real-time analytics",
      image: "https://picsum.photos/600/400?random=3",
      tech: "Next.js, TensorFlow, MongoDB"
    },
    {
      id: 4,
      title: "Project Delta",
      year: "2024",
      description: "Mobile app for sustainable living and carbon footprint tracking",
      image: "https://picsum.photos/600/400?random=4",
      tech: "React Native, Firebase, Python"
    },
    {
      id: 5,
      title: "Project Epsilon",
      year: "2025",
      description: "Blockchain-based supply chain transparency platform",
      image: "https://picsum.photos/600/400?random=5",
      tech: "Solidity, Web3.js, Express.js"
    },
    {
      id: 6,
      title: "Project Zeta",
      year: "2024",
      description: "Real-time collaborative code editor with AI assistance",
      image: "https://picsum.photos/600/400?random=6",
      tech: "WebSockets, OpenAI API, React"
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
