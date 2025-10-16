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
      <div className="project-meta">
        <div className="project-meta-left">
          <div className="project-meta-group">
            <h4>Timeline</h4>
            <p>{project.timeline || project.year}</p>
          </div>
          <div className="project-meta-group">
            <h4>Role</h4>
            <p>{project.jobTitle}</p>
          </div>
          <div className="project-meta-group">
            <h4>Tools</h4>
            <div className="project-tools">
              {(project.tech || '').split(',').map(t => (
                <span key={t.trim()} className="tool-chip">{t.trim()}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="project-meta-right">
          <h4>Overview</h4>
          <p>{project.overview || project.description}</p>
        </div>
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
