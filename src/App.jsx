import React, { useState } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleBack = () => {
    setSelectedProject(null)
  }

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBack} />
  }

  return (
    <div className="app">
      <Header />
      <Projects onProjectClick={handleProjectClick} />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>Like what you see? Please don't hesitate to reach out! I'd love to connect and chat about opportunities :) </p>
          </div>
          <div className="footer-right">
            <a href="mailto:2chrisjackson@gmail.com" className="footer-link">Email</a>
            <a href="https://www.linkedin.com/in/chrisjackson-/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
