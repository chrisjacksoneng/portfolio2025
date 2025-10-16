import React, { useEffect } from 'react'

const ProjectDetail = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const getGlowColor = (projectId) => {
    const glowColors = {
      1: 'rgba(255, 206, 26, 0.3)', // FFCE1A for WAT.ai - reduced opacity
      2: 'rgba(218, 108, 53, 0.3)', // DA6C35 for QQuote - reduced opacity
      3: 'rgba(249, 98, 16, 0.3)',  // F96210 for Encore - reduced opacity
      4: 'rgba(66, 37, 116, 0.4)',  // 422574 for Aeon - reduced opacity
      5: 'rgba(245, 158, 11, 0.3)', // Orange for Gradepad - reduced opacity
      6: 'rgba(218, 108, 53, 0.3)'  // DA6C35 for QQuote Special - reduced opacity
    }
    return glowColors[projectId] || 'rgba(255, 255, 255, 0.1)'
  }

  const getAeonGlow = () => {
    return `
      0 0 50px 8px rgba(66, 37, 116, 0.4),
      0 0 25px 3px rgba(66, 37, 116, 0.3),
      0 0 12px rgba(66, 37, 116, 0.2),
      inset 0 0 15px rgba(66, 37, 116, 0.15)
    `
  }

  const isAeon = project.id === 4

  const getProjectLink = (projectId) => {
    const links = {
      1: 'https://github.com/FORTif-ai', // WAT.ai
      3: 'https://encorefinancialgroup.ca/', // Encore
      4: 'https://aeonstellar.co/', // Aeon
      2: 'https://qquote.com/', // QQuote
      6: 'https://qquote.com/' // QQuote Special
    }
    return links[projectId] || '#'
  }

  const getImageTransform = (projectId) => {
    if (projectId === 1) return 'translateY(40px) scale(1.3)' // WAT.ai
    if (projectId === 4) return 'translateX(-10px) scale(1.4)' // Aeon
    return 'scale(1.15)' // Default - matches home page scaling
  }

  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <a href={getProjectLink(project.id)} target="_blank" rel="noopener noreferrer" className="links-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
          </svg>
        </a>
      </div>
      
      <div className="project-detail-content">
        <h1 className="project-detail-title">{project.title}</h1>
        <h2 className="project-detail-job-title">{project.jobTitle}</h2>
        
        <div className="project-detail-image-container">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-detail-image"
            style={{
              boxShadow: isAeon ? getAeonGlow() : `0 0 40px 6px ${getGlowColor(project.id)}`,
              transform: getImageTransform(project.id)
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
