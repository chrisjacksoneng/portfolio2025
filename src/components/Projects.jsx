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
