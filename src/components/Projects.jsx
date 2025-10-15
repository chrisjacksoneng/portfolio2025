import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      year: "2025",
      description: "Open-source background coding agent and interface (1300+ stars)",
      image: "https://picsum.photos/600/400?random=1",
      tech: "React, TypeScript, Node.js"
    },
    {
      id: 2,
      title: "Project Beta",
      year: "2025", 
      description: "Building a full-stack vibe coding platform",
      image: "https://picsum.photos/600/400?random=2",
      tech: "Vue.js, Python, PostgreSQL"
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
