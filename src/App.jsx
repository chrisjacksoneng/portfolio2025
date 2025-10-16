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
          <p>&copy; 2025 Chris Jackson</p>
        </div>
      </footer>
    </div>
  )
}

export default App
