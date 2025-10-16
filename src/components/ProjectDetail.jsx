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
            <p>I spent my first co-op term at QQuote working with <a href="https://www.linkedin.com/in/nathan-hufnagel-a3b5bb35/" target="_blank" rel="noopener noreferrer" className="team-member-link">Nathan Hufnagel</a>, and it was a great introduction to product management and the full product lifecycle. I got to work across a bunch of different areas, from designing features to testing them. The team was awesome, and I liked it enough that I decided to come back for another term—this time focusing more on the technical side of things.</p>

            <div className="role-subsection">
              <h5>What I Worked On</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Feature Specifications</strong>
                    <p>I wrote detailed feature specs and requirements to help guide the development team. This was my first real experience thinking through how features should work from a product perspective.</p>
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
                    <p>I created wireframes and mockups to visualize new product ideas. This was fun—getting to think about the user experience and how things should look and feel.</p>
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
                    <p>I helped with QA testing and ran through different scenarios to make sure features worked as expected. It was satisfying catching bugs before they made it to users.</p>
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
              <p>Creating wireframes and mockups was one of my favorite parts. I used Figma to design interfaces and think through user flows. There's something satisfying about seeing an idea go from a rough sketch to a polished mockup.</p>
              <p>I learned to pay attention to details that I hadn't really thought about before—spacing, typography, color choices, how different states look (loading, error, success). These small details make a huge difference in how users experience the product.</p>
            </div>

            <div className="role-subsection">
              <h5>What's Next</h5>
              <p>I'm coming back for another term, but this time I'll be diving into more technical work—building new features and working with APIs. I'm excited to get more hands-on with the code and apply what I learned about product thinking to the technical implementation.</p>
              <p>Having that product management experience will be really valuable when I'm building features. I'll have a better sense of what users actually need and how to prioritize my work.</p>
            </div>
          </div>
        )}

        {project.id === 3 && (
          <div className="about-this-role-section">
            <h4>About This Role</h4>
            <p>Over the summer, I joined a small student team at Encore Financial, working with <a href="https://www.linkedin.com/in/hasanjee/" target="_blank" rel="noopener noreferrer" className="team-member-link">Bilal Hasanjee</a> to build a prototype for an AI-powered financial platform. We were building something pretty ambitious—a full suite for investment research, portfolio management, and wealth tracking. Working remotely with this team gave me a ton of ownership and let me dive deep into both frontend and backend work.</p>

            <div className="role-subsection">
              <h5>What I Built</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V7H5V5H19M5,19V9H19V19H5M7,11H9V17H7V11M11,11H13V17H11V11M15,11H17V17H15V11Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Front-End Development</strong>
                    <p>I built out the React components for the financial dashboards and portfolio tracking features. This involved a lot of work with real-time data visualization and making sure everything felt responsive and fast.</p>
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
                    <p>I worked on the server-side logic and integrated market data APIs to pull real-time financial information. Also handled user authentication and session management to keep everything secure.</p>
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
                    <p>I created performance dashboards that showed investment KPIs, historical trends, and AI-generated insights. This was one of the more fun parts—figuring out how to make complex financial data easy to understand at a glance.</p>
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
                    <p>I designed wireframes and mockups for the core financial workflows. This was great practice thinking through user flows and making sure the experience felt intuitive, especially for something as complex as portfolio management.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>Building the Dashboard</h5>
              <p>One of the bigger challenges was building a dashboard that could handle real-time financial data without feeling laggy. I spent a lot of time optimizing how we fetched and displayed market data, using React hooks to manage state efficiently and implementing proper loading states.</p>
              <p>The portfolio tracking feature needed to show complex investment data in a way that made sense at a glance. I used Chart.js to create interactive visualizations that could drill down into specific time periods or asset classes. Getting the balance between detail and simplicity was tricky, but super rewarding once it clicked.</p>
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
            <p>I spent the summer working at Aeon Stellar Commerce on StellaEats, which is Canada's first AI-powered food marketplace focused on dietary needs. The team was pretty small, so I got to work directly with the founder on building out the paywall system. This was my first real experience working with payment infrastructure and subscription logic, which was both challenging and really rewarding.</p>

            <div className="role-subsection">
              <h5>What I Built</h5>
              <div className="contributions-grid">
                <div className="contribution-item">
                  <div className="contribution-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z" />
                    </svg>
                  </div>
                  <div className="contribution-text">
                    <strong>Paywall Implementation</strong>
                    <p>I built the access control logic for the different subscription tiers—free trial, standard, and premium. This involved figuring out how to gate features properly and handle subscription states across the app.</p>
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
                    <p>I integrated Stripe for payment processing and connected it with Firebase for user authentication. This was tricky at first—getting the payment flow to work smoothly with user sessions took some iteration, but it was satisfying once everything clicked.</p>
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
                    <p>I worked on the paywall UI and helped design the user flow for subscriptions. Making the upgrade experience feel smooth and not pushy was important here.</p>
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
                    <p>I did a lot of testing to catch edge cases and wrote up documentation for the team. Payment flows have a lot of moving parts, so having clear docs was super helpful.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="role-subsection">
              <h5>Subscription Flow</h5>
              <p>Building the subscription logic was more complex than I initially thought. We had three tiers—free trial, standard, and premium—and each needed different access levels for features like AI meal planning, advanced dietary filters, and premium recipes. I had to think through all the edge cases: what happens when someone's trial expires? What if they cancel mid-cycle? How do we handle failed payments?</p>
              <p>I ended up creating a state machine to handle all the different subscription states, which made the logic much cleaner and easier to debug. This was one of those moments where the initial complexity felt overwhelming, but breaking it down into smaller pieces made it all click.</p>
            </div>

            <div className="role-subsection">
              <h5>Payment Integration</h5>
              <p>Integrating Stripe was my first time working with a payment processor, and there was definitely a learning curve. The tricky part was making sure the payment flow worked seamlessly with Firebase authentication—users needed to be able to upgrade without losing their session or having to re-authenticate.</p>
              <p>I spent a lot of time testing different scenarios: successful payments, failed payments, refunds, subscription cancellations. Stripe's webhooks were super helpful here for handling events asynchronously. Getting the whole flow working smoothly was really satisfying.</p>
            </div>

            <div className="role-subsection">
              <h5>The Experience</h5>
              <p>Working at Aeon was a great introduction to the startup world. The team was small, which meant I had a lot of ownership and got to see how decisions were made quickly. Working directly with the founder gave me insight into product strategy and how technical decisions impact the business.</p>
              <p>This was also my first time working with FlutterFlow, which was interesting. It's a no-code platform, but we still had to write custom code for the payment logic. Learning to work within those constraints taught me a lot about flexibility and finding creative solutions.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
