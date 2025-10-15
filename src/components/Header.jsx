import React from 'react'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="name">Chris Jackson</h1>
        </div>
        <div className="navbar-right">
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Email</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
