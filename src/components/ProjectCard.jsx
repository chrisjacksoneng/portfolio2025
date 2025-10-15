import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">
          {project.title} — {project.year}
        </h3>
        <p className="project-description">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
