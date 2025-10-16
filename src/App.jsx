import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Listen for browser back/forward button clicks
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state === null) {
        // Going back to homepage
        setSelectedProject(null)
        document.title = 'Chris Jackson'
      } else {
        // Going to a project detail
        setSelectedProject(event.state.project)
        document.title = `Chris Jackson | ${event.state.project.title}`
      }
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    // Create URL-friendly slug from project title
    const urlSlug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    // Push state to browser history so back button works
    window.history.pushState({ project }, '', `/${urlSlug}`)
    // Update browser title
    document.title = `Chris Jackson | ${project.title}`
  }

  const handleBack = () => {
    setSelectedProject(null)
    // Reset browser title
    document.title = 'Chris Jackson'
    // Go back in browser history
    window.history.back()
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
