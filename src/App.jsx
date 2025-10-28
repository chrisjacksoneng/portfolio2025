import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Handle loading animation
  useEffect(() => {
    const minLoadTime = 800 // Minimum loading time to prevent flash
    
    const timer1 = setTimeout(() => {
      setIsLoading(false)
    }, minLoadTime)
    
    // Wait for fonts to load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        clearTimeout(timer1)
        setTimeout(() => {
          setIsLoading(false)
        }, 200) // Small delay after fonts load
      })
    }
    
    return () => clearTimeout(timer1)
  }, [])
  
  // Disable browser scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

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
    // Custom URL slugs for specific projects
    const customSlugs = {
      3: 'encore-financial', // Encore Financial Ltd
      4: 'aeon' // Aeon Stellar Commerce
    }
    // Create URL-friendly slug from project title
    const urlSlug = customSlugs[project.id] || project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    // Push state to browser history so back button works
    window.history.pushState({ project }, '', `/${urlSlug}`)
    // Update browser title
    document.title = `Chris Jackson | ${project.title}`
  }

  const handleBack = () => {
    setSelectedProject(null)
    // Reset browser title
    document.title = 'Chris Jackson'
    // Scroll to top immediately before going back
    window.scrollTo(0, 0)
    // Go back in browser history
    window.history.back()
  }

  // Show loading screen while page is loading
  if (isLoading) {
    return <LoadingScreen />
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
