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
          </div>
          <div className="detail-meta-right">
            <h4>Synopsis</h4>
            <p>{project.synopsis || project.description}</p>
          </div>
          <div className="detail-meta-group detail-tools-section">
            <h4>Tools & Skills</h4>
            <div className="detail-tools">
              {(project.tech || '').split(',').map(t => (
                <span key={t.trim()} className="tool-chip">{t.trim()}</span>
              ))}
            </div>
          </div>
        </div>

        {project.id === 1 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>When I started at Waterloo, I set myself a goal of joining one of the prestigious design teams to really experience what the university has to offer. WAT.ai is one of those teams, and I was excited when I got in as a <strong>Machine Learning Engineer</strong> working on FORTif.ai.</p>

            <div className="role-subsection">
              <h5>The Project</h5>
              <p>FORTif.ai is an AI-driven companion designed to help seniors live independently. It's a pretty ambitious project that combines proactive safety monitoring with personalized daily support. The goal is to give seniors the confidence to stay in their homes longer while giving their families peace of mind.</p>
              <p>The system uses <strong>computer vision</strong> to continuously scan the home for potential hazards—things like spills, cluttered pathways, or tripping hazards. When it detects something, it provides clear, actionable recommendations to address the issue. At the same time, there's an AI chatbot that engages users in friendly conversations, offering medication and appointment reminders, wellness check-ins, and empathetic responses to questions.</p>
            </div>

            <div className="role-subsection">
              <h5>Hazard Detection</h5>
              <p>One of the core features I worked on was the <strong>hazard detection model</strong>. This uses computer vision to identify potential safety risks in <strong>real-time</strong>. Training a model to recognize things like spills or cluttered pathways is tricky—you need a good dataset, and you have to think about edge cases like different lighting conditions or camera angles.</p>
              <p>We had to be careful about false positives too. You don't want to alarm users unnecessarily, but you also can't miss actual hazards. Finding that balance was challenging but really interesting from a machine learning perspective.</p>
            </div>

            <div className="role-subsection">
              <h5>AI Chatbot</h5>
              <p>The chatbot component was another major part of the project. It needed to be conversational and empathetic, which meant thinking carefully about how we structured prompts and responses. The chatbot handles everything from medication reminders to wellness check-ins to answering questions about health and safety.</p>
              <p>We also built in <strong>voice-to-text</strong> capabilities so users could interact with the system naturally, without having to type everything out. This made the whole experience more accessible and user-friendly.</p>
            </div>

            <div className="role-subsection">
              <h5>The Experience</h5>
              <p>Working on WAT.ai has been a great experience. The team is talented and passionate, and working on a project with real social impact has been really motivating. Getting to work with cutting-edge AI and computer vision technology while solving a meaningful problem is exactly what I was hoping for when I joined.</p>
              <p>It's also been great to collaborate with other disciplines—working with designers on the user experience, with other engineers on the technical implementation, and thinking about how to make the system actually useful for seniors. This kind of cross-functional work is really valuable.</p>
            </div>
          </div>
        )}

        {project.id === 2 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>I came back to QQuote for a second term after really enjoying my first co-op there. This time, I wanted to focus on the software development side of things. Having done product management work in my first term, I was excited to get more hands-on with the code and apply what I'd learned about user needs to the technical implementation.</p>

            <div className="role-subsection">
              <h5>API Development</h5>
              <p>One of my main projects was working on a new <strong>API</strong> that would help both dealerships and our internal team automate their processes. I started by creating detailed specs for the API—defining the endpoints, request/response formats, authentication requirements, and error handling.</p>
              <p>This was great practice thinking about <strong>API design</strong> from a developer's perspective. I had to consider things like: What data do dealerships actually need? How should we structure the responses to be useful but not overwhelming? What edge cases do we need to handle? Having the product management experience from my first term helped me think through these questions with the end user in mind.</p>
            </div>

            <div className="role-subsection">
              <h5>QA Automation</h5>
              <p>I also worked on automating our QA process using <strong>Cypress.io</strong>. Manual testing was taking up a lot of time, and we needed a way to catch regressions quickly as we added new features. I built out <strong>automated test suites</strong> that would run on key user flows and critical paths.</p>
              <p>Learning Cypress was interesting—it's a powerful tool that lets you write tests that actually interact with the browser like a real user would. I had to think about what scenarios were most important to test and how to structure the tests so they'd be maintainable as the product evolved.</p>
            </div>

            <div className="role-subsection">
              <h5>The Experience</h5>
              <p>Coming back to QQuote for a second term was really rewarding. I already knew the team and the product, which meant I could jump into more complex projects right away. The combination of product management experience from my first term and technical work from this term gave me a much more complete picture of how software gets built.</p>
              <p>Working on API development taught me a lot about <strong>system design</strong> and thinking about how different parts of a system communicate with each other. And the QA automation work showed me the importance of having good test coverage and catching bugs early in the development cycle.</p>
            </div>
          </div>
        )}

        {project.id === 6 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>I spent my first co-op term at QQuote working with <a href="https://www.linkedin.com/in/nathan-hufnagel-a3b5bb35/" target="_blank" rel="noopener noreferrer" className="team-member-link">Nathan Hufnagel</a>, and it was a great introduction to <strong>product management</strong> and the <strong>full product lifecycle</strong>. I got to work across a bunch of different areas, from designing features to testing them. The team was awesome, and I liked it enough that I decided to come back for another term—this time focusing more on the technical side of things.</p>

            <div className="role-subsection">
              <h5>What I Worked On</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V7H5V5H19M5,19V9H19V19H5M7,11H9V17H7V11M11,11H13V17H11V11M15,11H17V17H15V11Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Feature Specifications</strong>
                    <p>I wrote detailed <strong>feature specs</strong> and requirements to help guide the development team. This was my first real experience thinking through how features should work from a product perspective.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Design & Wireframes</strong>
                    <p>I created wireframes and mockups to visualize new product ideas. This was fun—getting to think about the user experience and how things should look and feel.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>QA Testing</strong>
                    <p>I helped with QA testing and ran through different scenarios to make sure features worked as expected. It was satisfying catching bugs before they made it to users.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Documentation</strong>
                    <p>I wrote up internal docs to help with team processes and future projects. Good documentation makes everyone's life easier.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>Product Management</h5>
              <p>Working on the product side was eye-opening. I learned how to think about features from the user's perspective—not just what's technically possible, but what actually solves a problem for them. Writing feature specs taught me to think through edge cases and user flows before any code gets written.</p>
              <p>I also got to work on prioritization and planning. Seeing how the team decided what to build next, balancing user requests with technical debt and business goals, was really valuable. It's one thing to know how to code, but understanding why you're building something is just as important.</p>
            </div>

            <div className="role-subsection">
              <h5>Design & UX</h5>
              <p>Creating wireframes and mockups was one of my favorite parts. I used <strong>Figma</strong> to design interfaces and think through <strong>user flows</strong>. There's something satisfying about seeing an idea go from a rough sketch to a polished mockup.</p>
              <p>I learned to pay attention to details that I hadn't really thought about before—spacing, typography, color choices, how different states look (loading, error, success). These small details make a huge difference in how users experience the product.</p>
            </div>

            <div className="role-subsection">
              <h5>What's Next</h5>
              <p>I'm coming back for another term, but this time I'll be diving into more technical work—building new features and working with APIs. I'm excited to get more hands-on with the code and apply what I learned about product thinking to the technical implementation.</p>
              <p>Having that product management experience will be really valuable when I'm building features. I'll have a better sense of what users actually need and how to prioritize my work.</p>
            </div>
          </div>
        )}

        {project.id === 5 && (
          <div className="about-this-role-section">
            <h4>About This Project</h4>
            <p>Gradepad was my first big coding project, and it came from a real problem I was facing as a student. I was tired of juggling multiple tabs of grade calculators that didn't save my data, forcing me to re-enter everything each time. So I decided to build something better—a comprehensive grade tracking platform that actually solved the problems I was dealing with.</p>

            <div className="role-subsection">
              <h5>The Problem</h5>
              <p>Most existing grade calculators either looked outdated or didn't store user data, meaning you had to start from scratch every time you opened them. They also couldn't handle multiple courses at once, and none of them showed an overall semester average. I was constantly switching between tabs and doing manual calculations, which was frustrating and error-prone.</p>
              <p>I wanted to build something that looked good, saved my work, and gave me a complete picture of how I was doing across all my classes.</p>
            </div>

            <div className="role-subsection">
              <h5>What I Built</h5>
              <p>I built a <strong>full-stack web application</strong> with <strong>user authentication</strong>, so students could create accounts and save their data. The core feature was the grade calculator, which let you add assignments with titles, due dates, grades, and weights. The system automatically calculated your current grade, highest possible grade, and lowest possible grade for each course.</p>
              <p>I also built a dashboard that showed all your courses at a glance, so you could see your semester-wide performance without switching between different pages. This was one of the most useful features—being able to see everything in one place.</p>
            </div>

            <div className="role-subsection">
              <h5>Technical Challenges</h5>
              <p>This was my first time building something with a full tech stack—HTML, CSS, JavaScript for the frontend, PHP for the server-side logic, and MySQL for the database. Learning how to connect all these pieces together was a huge learning curve.</p>
              <p>One of the trickier parts was getting the grade calculations right. I had to handle different grading schemes—some courses use points, others use percentages, and some use letter grades. Making sure the calculations were accurate and handling edge cases (like missing assignments or extra credit) took a lot of testing.</p>
              <p>User authentication was also new territory for me. Learning about <strong>password hashing</strong>, <strong>session management</strong>, and secure login flows was really valuable, even if it was challenging at first.</p>
            </div>

            <div className="role-subsection">
              <h5>Design & UX</h5>
              <p>I wanted the interface to look clean and modern, which meant spending a lot of time on CSS and making sure everything was responsive. I used a monospaced font for the grade tables so all the numbers lined up nicely, which made it easier to scan your data.</p>
              <p>I also thought about features that would make the app more useful, like color-coding assignments based on due dates (overdue in red, due soon in yellow, etc.) and a potential grade calculator where you could see "if I get X on my final, what will my grade be?"</p>
            </div>

            <div className="role-subsection">
              <h5>What I Learned</h5>
              <p>This project taught me a ton about the full development cycle—from planning and requirements gathering to building, testing, and iterating. I wrote a comprehensive design document before I started coding, which helped me think through the requirements and avoid scope creep.</p>
              <p>It was also my first real experience with version control, database design, and thinking about security. Building something from scratch gave me a much better understanding of how all the pieces of a web application fit together.</p>
              <p>Most importantly, it showed me that I could identify a problem, design a solution, and actually build it. That confidence was huge for me as a developer.</p>
            </div>
          </div>
        )}

        {project.id === 3 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>Over the summer of 2025, I joined a small team at Encore Financial, working with <a href="https://www.linkedin.com/in/hasanjee/" target="_blank" rel="noopener noreferrer" className="team-member-link">Bilal Hasanjee</a> to build a prototype for an <strong>AI-powered financial platform</strong>. We were building something pretty ambitious—a full suite for investment research, portfolio management, and wealth tracking. Working remotely with this team gave me a ton of ownership and let me dive deep into both frontend and backend work.</p>

            <div className="role-subsection">
              <h5>What I Built</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Front-End Development</strong>
                    <p>I built out the React components for the financial dashboards and portfolio tracking features. This involved a lot of work with <strong>real-time data visualization</strong> and making sure everything felt responsive and fast.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Back-End & API Integration</strong>
                    <p>I worked on the server-side logic and integrated <strong>market data APIs</strong> to pull real-time financial information. Also handled user authentication and session management to keep everything secure.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Data Visualization & Analytics</strong>
                    <p>I created performance dashboards that showed investment KPIs, historical trends, and AI-generated insights. This was one of the more fun parts—figuring out how to make complex financial data easy to understand at a glance.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>UX/UI Design</strong>
                    <p>I designed wireframes and mockups for the core financial workflows. This was great practice thinking through user flows and making sure the experience felt intuitive, especially for something as complex as portfolio management.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>Building the Dashboard</h5>
              <p>One of the bigger challenges was building a dashboard that could handle real-time financial data without feeling laggy. I spent a lot of time optimizing how we fetched and displayed market data, using React hooks to manage state efficiently and implementing proper loading states.</p>
              <p>The portfolio tracking feature needed to show complex investment data in a way that made sense at a glance. I used <strong>Chart.js</strong> to create interactive visualizations that could drill down into specific time periods or asset classes. Getting the balance between detail and simplicity was tricky, but super rewarding once it clicked.</p>
            </div>

            <div className="role-subsection">
              <h5>AI Carousel Interface</h5>
              <p>I built a carousel interface to help users navigate through different AI prompt options. This made it easy for users to explore various research queries and see what the AI could help them with, without having to type everything out manually. When a user clicks on any analysis module, it opens a chatbot page with a pre-filled prompt based on what was clicked, immediately starting a conversation with the AI.</p>

              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>
                <li><strong>Coverflow Effect:</strong> This was one of the more complex features to implement. I built a custom React carousel from scratch using useState for state management and Tailwind CSS for styling. The coverflow effect required careful manipulation of CSS transform properties, z-index layering for proper depth perception, and optimized transition timing functions to ensure smooth animations.</li>
                <li><strong>Card Positioning & Navigation:</strong> I implemented a card positioning algorithm that calculated dynamic offsets based on the current index, handling edge cases for the first and last cards. The navigation logic involved debouncing to prevent rapid state changes and ensuring proper boundary conditions.</li>
                <li><strong>Performance Optimization:</strong> I spent considerable time optimizing the render performance, using React.memo where appropriate and minimizing unnecessary re-renders. I initially experimented with auto-rotation using useEffect and setInterval, but ultimately disabled it in favor of user-controlled navigation for better accessibility and intentional user interaction.</li>
              </ul>

              <p>Here's a demonstration of the MVP I created, shared within NDA limitations.</p>
              <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '100%',
                  maxWidth: '750px',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.08), 0 0 60px rgba(255, 255, 255, 0.05)',
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.15))'
                }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  >
                    <source src="/videos/SampleCarousel.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>Deep Research Model</h5>
              <p>I also worked on implementing the <strong>deep research</strong> feature, which allowed users to get comprehensive, in-depth analysis on specific topics. The model would pull from multiple sources and provide detailed insights that went beyond surface-level information.</p>
              <p>Here's a demonstration of the MVP I created, shared within NDA limitations.</p>
              <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '100%',
                  maxWidth: '750px',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.15), 0 0 40px rgba(255, 255, 255, 0.08), 0 0 60px rgba(255, 255, 255, 0.05)',
                  filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.15))'
                }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  >
                    <source src="/videos/Deep Research.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>AI Features</h5>
              <p>We integrated AI to provide personalized investment insights and recommendations. This involved working with language models to analyze market trends and generate readable summaries for users. I helped design the prompts and structure the output so it felt natural and actually useful.</p>
            </div>

            <div className="role-subsection">
              <h5>The Experience</h5>
              <p>Working at Encore was a great learning experience. The team was small but really talented, and I got to wear a lot of different hats. Going from designing a feature to building it to testing it gave me a much better sense of the full product development cycle. Plus, working in fintech meant I had to think carefully about security and data handling, which was great practice for building production-ready software.</p>
            </div>
          </div>
        )}

        {project.id === 4 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>I spent the summer working at Aeon Stellar Commerce on StellaEats, Canada's first AI-powered food marketplace focused on dietary needs. I worked closely with <a href="https://www.linkedin.com/in/jayden-ferrer/" target="_blank" rel="noopener noreferrer" className="team-member-link">Jayden Ferrer</a>, under <a href="https://www.linkedin.com/in/primiecegnar/" target="_blank" rel="noopener noreferrer" className="team-member-link">Primie Cegnar</a>, to build out the paywall system. This was my first real experience working with <strong>payment infrastructure</strong> and <strong>subscription logic</strong>, which was both challenging and really rewarding.</p>

            <div className="role-subsection">
              <h5>What I Built</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Paywall Implementation</strong>
                    <p>I built the access control logic for the different subscription tiers—free trial, standard, and premium. This involved figuring out how to gate features properly and handle subscription states across the app. We also did extensive research on other paywall designs to find inspiration and analyze best practices.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Stripe & Firebase Integration</strong>
                    <p>I integrated <strong>Stripe</strong> for payment processing and connected it with <strong>Firebase</strong> for user authentication. We spent significant time troubleshooting the Stripe integration and deployment process. While we weren't able to fully overcome the deployment issues within the timeframe, the process deepened my understanding of payment gateways and the complexities of payment system integration.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Front-End Design & UX</strong>
                    <p>I worked on the paywall UI in Figma and helped design the user flow for subscriptions. We consistently sent screenshots and demo videos to Primie, and the feedback was almost always positive. It was clear the designs met the project goals.</p>
                  </div>
                </div>
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Testing & Documentation</strong>
                    <p>I created scenario videos replicating what would happen on the live app and wrote comprehensive developer documentation detailing the paywall setup, configuration, and maintenance steps. We also documented the problems we encountered and how future developers should approach them.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>System Architecture</h5>
              <p>We designed a comprehensive <strong>system architecture</strong> to handle user registration, subscription management, and content access control. The architecture integrated Firebase for authentication, Stripe for payment processing, and Firestore as the primary database.</p>
              <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <img
                  src="./images/aeonArchitecture.png"
                  alt="Aeon Architecture Diagram"
                  style={{
                    width: '100%',
                    maxWidth: '750px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.15), 0 0 120px rgba(255, 255, 255, 0.08)',
                    filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.25))'
                  }}
                />
              </div>
              <p>The system included several key modules: a User Authentication Module for registration and initial setup, a Subscription Module for managing premium subscriptions, a Tier-Level Access Module for controlling content based on user roles, and an Admin Control Module for administrative oversight. The architecture ensured that content access was dynamically controlled based on subscription status, with Stripe webhooks keeping the system synchronized with payment events.</p>
            </div>

            <div className="role-subsection">
              <h5>Technical Challenges</h5>
              <p>One of the biggest challenges we faced was with the Stripe integration and deployment process. Despite spending significant time troubleshooting and testing different approaches, we weren't able to fully overcome these deployment issues within the timeframe given. However, this experience taught me a lot about the complexities of payment system integration and deployment.</p>
              <p>We also ran into challenges with Stripe price configuration and Firebase rules. Working through these problems helped me understand the technical requirements behind payment gateways and the importance of thorough documentation for future developers.</p>
            </div>

            <div className="role-subsection">
              <h5>The Experience</h5>
              <p>Working at Aeon was a great introduction to the startup world. The team was small, which meant I had a lot of ownership and got to see how decisions were made quickly. Working directly with Primie gave me insight into product strategy and how technical decisions impact the business.</p>
              <p>This was my first time working with payment infrastructure and subscription systems. Learning to work within platform constraints and dealing with complex integrations taught me a lot about flexibility and finding creative solutions.</p>
              <p>I'm proud of what we accomplished—we contributed concrete deliverables including paywall designs, architectural planning, and user flow strategies that will support future implementation. This experience strengthened both my design and problem-solving skills, while giving me a deeper appreciation for the collaboration and persistence needed to bring new features to life.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
