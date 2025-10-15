import React from 'react'

const ProjectCard = ({ project, onProjectClick }) => {
  const handleImageClick = () => {
    onProjectClick(project)
  }

  return (
    <div className="project-card">
      <div className="project-image" onClick={handleImageClick}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3 className="project-title">
          {project.title} <span className="year-separator">— {project.year}</span>
        </h3>
        <p className="project-description">
          {project.description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
