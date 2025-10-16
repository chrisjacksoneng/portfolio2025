import React, { useEffect } from 'react'

const ProjectDetail = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    if (projectId === 1) return 'none' // WAT.ai: preserve true shape without scaling
    if (projectId === 4) return 'none' // Aeon: preserve true shape without scaling
    return 'scale(1.15)' // Default - matches home page scaling
  }

  return (
    <div className="project-detail">
      <div className="project-detail-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <a href={getProjectLink(project.id)} target="_blank" rel="noopener noreferrer" className="links-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </a>
      </div>

      <div className="project-detail-content">
        <h1 className="project-detail-title">{project.title}</h1>
        <h2 className="project-detail-job-title">{project.jobTitle}</h2>

        <div className={`project-detail-image-container project-glow-${project.id} ${project.id === 4 ? 'aeon-detail' : ''} ${project.id === 1 ? 'wat-detail' : ''}`}>
          <img
            src={project.image}
            alt={project.title}
            className={`project-detail-image ${project.id === 4 ? 'aeon-image' : ''} ${project.id === 1 ? 'wat-image' : ''}`}
            style={{
              transform: getImageTransform(project.id)
            }}
          />
        </div>

        <div className="detail-meta">
          <div className="detail-meta-left">
            <div className="detail-meta-group">
              <h4>Timeline</h4>
              <p>{project.timeline || project.year}</p>
            </div>
            <div className="detail-meta-group">
              <h4>Role</h4>
              <p>{project.jobTitle}</p>
            </div>
            <div className="detail-meta-group">
              <h4>Tools & Skills</h4>
              <div className="detail-tools">
                {(project.tech || '').split(',').map(t => (
                  <span key={t.trim()} className="tool-chip">{t.trim()}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="detail-meta-right">
            <h4>Synopsis</h4>
            <p>{project.synopsis || project.description}</p>
          </div>
        </div>

        {project.id === 6 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>During my first co-op term at QQuote, working under <a href="https://www.linkedin.com/in/nathan-hufnagel-a3b5bb35/" target="_blank" rel="noopener noreferrer" className="team-member-link">Nathan Hufnagel</a>, I had the opportunity to contribute across several areas, with a focus on product management and process improvement. I decided to accept their return offer to continue working with the team, this time taking on a more technical role focused on software development.</p>

            <div className="role-subsection">
              <h5>Key Contributions</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Feature Specifications</strong>
                    <p>Created detailed feature specifications and developed requirements to guide development</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Design & Wireframes</strong>
                    <p>Designed wireframes and mockups to bring new product ideas to life</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>QA Testing</strong>
                    <p>Supported QA testing and helped validate product behaviour through scenario testing</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V7H5V5H19M5,19V9H19V19H5M7,11H9V17H7V11M11,11H13V17H11V11M15,11H17V17H15V11Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Documentation</strong>
                    <p>Wrote internal documentation to support team processes and future projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>Next Steps</h5>
              <p>For my upcoming term, I'll be transitioning into a more technical role, focusing on developing new features and working with APIs to enhance the product's functionality.</p>
            </div>
          </div>
        )}

        {project.id === 3 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>As part of a collaborative student team at Encore Financial, working under <a href="https://www.linkedin.com/in/hasanjee/" target="_blank" rel="noopener noreferrer" className="team-member-link">Bilal Hasanjee</a>, I contributed to building a prototype for an intelligent Financial Application Suite focused on investment research, portfolio management, and wealth tracking. Working in an agile, remote team environment, I applied modern development practices to create a scalable fintech solution.</p>

            <div className="role-subsection">
              <h5>Key Contributions</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V7H5V5H19M5,19V9H19V19H5M7,11H9V17H7V11M11,11H13V17H11V11M15,11H17V17H15V11Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Front-End Development</strong>
                    <p>Built responsive React components for financial dashboards, portfolio tracking, and interactive data visualizations</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Back-End & API Integration</strong>
                    <p>Developed server-side logic, integrated market data APIs, and implemented secure user authentication</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Data Visualization & Analytics</strong>
                    <p>Created real-time performance dashboards with investment KPIs, historical charts, and AI-powered insights</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>UX/UI Design</strong>
                    <p>Designed wireframes, mockups, and user flow diagrams for core financial workflows and interfaces</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>Technical Stack</h5>
              <p>React, Node.js, Firebase, REST APIs, Chart.js, Figma, and modern fintech data modeling practices</p>
            </div>
          </div>
        )}

        {project.id === 4 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>As a student developer at Aeon Stellar Commerce Inc., I contributed to building a robust paywall system for StellaEats, Canada's first dietary-first AI-powered food marketplace. Working closely with the technical lead and founder, I implemented subscription access control logic and integrated payment infrastructure to create a seamless user experience for managing premium features.</p>

            <div className="role-subsection">
              <h5>Key Contributions</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Paywall Implementation</strong>
                    <p>Designed and implemented access control logic for free trial, standard, and premium subscription tiers</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Stripe & Firebase Integration</strong>
                    <p>Integrated Stripe payment processing with Firebase user authentication and session management</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Front-End Design & UX</strong>
                    <p>Collaborated on paywall UI screens and user flow design to ensure seamless subscription experience</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Testing & Documentation</strong>
                    <p>Conducted user testing, debugged edge cases, and delivered comprehensive technical documentation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>Technical Stack</h5>
              <p>FlutterFlow, Firebase, Stripe, user authentication, subscription management, and mobile app architecture</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
