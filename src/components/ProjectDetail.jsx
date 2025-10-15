import React from 'react'

const ProjectDetail = ({ project, onBack }) => {
  const getGlowColor = (projectId) => {
    const glowColors = {
      1: 'rgba(255, 206, 26, 0.6)', // FFCE1A for WAT.ai
      2: 'rgba(218, 108, 53, 0.6)', // DA6C35 for QQuote
      3: 'rgba(249, 98, 16, 0.6)',  // F96210 for Encore
      4: 'rgba(66, 37, 116, 0.9)',  // 422574 for Aeon (stronger)
      5: 'rgba(245, 158, 11, 0.6)', // Orange for Gradepad
      6: 'rgba(218, 108, 53, 0.6)'  // DA6C35 for QQuote Special
    }
    return glowColors[projectId] || 'rgba(255, 255, 255, 0.2)'
  }

  const getAeonGlow = () => {
    return `
      0 0 80px 15px rgba(66, 37, 116, 0.9),
      0 0 40px 5px rgba(66, 37, 116, 0.7),
      0 0 20px rgba(66, 37, 116, 0.5),
      inset 0 0 30px rgba(66, 37, 116, 0.3)
    `
  }

  const isAeon = project.id === 4

  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
      </div>
      
      <div className="project-detail-content">
        <h1 className="project-detail-title">{project.title}</h1>
        
        <div className="project-detail-image-container">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-detail-image"
            style={{
              boxShadow: isAeon ? getAeonGlow() : `0 0 60px 10px ${getGlowColor(project.id)}`
            }}
          />
        </div>
        
        <div className="project-detail-description">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
