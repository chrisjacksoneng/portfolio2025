import React from 'react'

const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontFamily: '"Dynalight", cursive',
        fontWeight: 300,
        background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #b0b0b0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '3rem'
      }}>
        Chris Jackson
      </h1>

      <div style={{
        width: '300px',
        height: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '2px',
        overflow: 'hidden',
        marginTop: '1rem'
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '2px',
          animation: 'loadingProgress 1.5s ease-out forwards'
        }} />
      </div>

      <style>{`
        @keyframes loadingProgress {
          0% { 
            width: 0%;
          }
          100% { 
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
