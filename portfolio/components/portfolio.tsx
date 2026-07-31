'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [typedText, setTypedText] = useState('')
  const typingRef = useRef<NodeJS.Timeout>()

  const fullText = "I'm Yamuna D - Full Stack Developer & AI Enthusiast"
  const skills = [
    { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C++'] },
    { category: 'Frameworks & Libraries', items: ['React.js', 'Next.js', 'Flask', 'Node.js', 'Tailwind CSS', 'FastAPI'] },
    { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'] },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollProgress(scrolled)
      setShowBackToTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let index = 0
    typingRef.current = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingRef.current)
      }
    }, 50)

    return () => clearInterval(typingRef.current)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
          color: #e0e0e0;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #00d4ff 0%, #0099ff 100%);
          z-index: 1000;
        }

        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(10, 14, 39, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(0, 212, 255, 0.1);
        }

        nav {
          display: flex;
          gap: 2rem;
          align-items: center;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        nav a {
          color: #e0e0e0;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s;
        }

        nav a:hover {
          color: #00d4ff;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
          margin-top: 60px;
        }

        .hero-content {
          max-width: 800px;
        }

        .profile-image {
          width: 280px;
          height: 350px;
          border-radius: 20px;
          border: 3px solid #00d4ff;
          margin: 0 auto 2rem auto;
          object-fit: cover;
          object-position: center top;
          box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
          animation: float 3s ease-in-out infinite;
          display: block;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          min-height: 4rem;
        }

        .typing-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        .hero p {
          font-size: 1.2rem;
          color: #a0a0a0;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        button, a.btn {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
          color: #0a0e27;
          font-weight: 600;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
        }

        .btn-secondary {
          border: 2px solid #00d4ff;
          color: #00d4ff;
          background: transparent;
        }

        .btn-secondary:hover {
          background: rgba(0, 212, 255, 0.1);
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #00d4ff;
          border-radius: 50%;
          color: #00d4ff;
          text-decoration: none;
          transition: all 0.3s;
        }

        .social-links a:hover {
          background: #00d4ff;
          color: #0a0e27;
          transform: translateY(-3px);
        }

        section {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .about-text h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #00d4ff;
        }

        .about-text p {
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .education-item {
          background: rgba(0, 212, 255, 0.05);
          border-left: 4px solid #00d4ff;
          padding: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 4px;
        }

        .education-item h4 {
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 12px;
          padding: 2rem;
          transition: all 0.3s;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: #00d4ff;
          box-shadow: 0 15px 35px rgba(0, 212, 255, 0.15);
        }

        .skill-card h3 {
          color: #00d4ff;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          background: rgba(0, 212, 255, 0.15);
          color: #00d4ff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(0, 212, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: #00d4ff;
          box-shadow: 0 15px 35px rgba(0, 212, 255, 0.15);
        }

        .project-header {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 255, 0.1));
          padding: 1.5rem;
          border-bottom: 1px solid rgba(0, 212, 255, 0.2);
        }

        .project-header h3 {
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-content p {
          color: #a0a0a0;
          margin-bottom: 1rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: rgba(0, 153, 255, 0.2);
          color: #00d4ff;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.85rem;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 0%;
          background: transparent;
        }

        .timeline-item {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: rgba(0, 212, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 8px;
        }

        .timeline-item h3 {
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .timeline-item .date {
          color: #00d4ff;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          background: rgba(0, 212, 255, 0.08);
          border: 1px solid rgba(0, 212, 255, 0.2);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          transition: all 0.3s;
        }

        .cert-card:hover {
          transform: scale(1.05);
          border-color: #00d4ff;
        }

        .cert-card h4 {
          color: #00d4ff;
          margin-bottom: 0.5rem;
        }

        .contact-section {
          text-align: center;
        }

        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          display: grid;
          gap: 1rem;
        }

        .form-group {
          text-align: left;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #00d4ff;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background: rgba(0, 212, 255, 0.05);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 4px;
          color: #e0e0e0;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00d4ff;
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.2);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #00d4ff 0%, #0099ff 100%);
          color: #0a0e27;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
          z-index: 500;
        }

        .back-to-top.active {
          opacity: 1;
          visibility: visible;
        }

        .back-to-top:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
        }

        footer {
          text-align: center;
          padding: 2rem;
          border-top: 1px solid rgba(0, 212, 255, 0.1);
          color: #707070;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          nav {
            gap: 1rem;
            font-size: 0.9rem;
          }

          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            margin-left: 60px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header>
        <nav>
          <button onClick={() => scrollToElement('about')} className="nav-link">About</button>
          <button onClick={() => scrollToElement('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToElement('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToElement('experience')} className="nav-link">Experience</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profesional%20photo-PMeReXVjq4zsjjhRPt2sYCPHAcyCM7.png"
            alt="Yamuna D"
            width={200}
            height={200}
            className="profile-image"
          />
          <h1>
            {typedText}
            <span className="typing-cursor">|</span>
          </h1>
          <p>Passionate about creating elegant solutions to complex problems</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-secondary">View My Work</a>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">in</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">gh</a>
            <a href="https://leetcode.com/u/YamunaD" target="_blank" rel="noopener noreferrer">lc</a>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <div className="about-grid">
          <div>
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Technology in Information Technology</h4>
              <p>Amrita School of Engineering, Amritapuri</p>
              <p>CGPA: 7.5/10 (2022)</p>
            </div>
            <div className="education-item">
              <h4>Higher Secondary (12th)</h4>
              <p>Sisira Model Schools</p>
            </div>
          </div>
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>I&apos;m a passionate Full Stack Developer with expertise in creating innovative web and mobile applications. My journey in tech has been driven by a desire to solve real-world problems through elegant code.</p>
            <p><strong>Key Interests:</strong></p>
            <ul style={{ marginLeft: '1rem', lineHeight: '2' }}>
              <li>🤖 Artificial Intelligence & Machine Learning</li>
              <li>💻 Full Stack Web Development</li>
              <li>🚀 Cloud Computing & DevOps</li>
              <li>📱 Mobile Application Development</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <h3>PathPilot AI</h3>
              <p>AI-Powered Career Guidance Platform</p>
            </div>
            <div className="project-content">
              <p>An intelligent platform that provides personalized career guidance using AI algorithms. Features comprehensive assessment tools, real-time recommendations, and interactive mentoring sessions.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">AI/ML</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>AI Study Assistant</h3>
              <p>Intelligent Learning Platform</p>
            </div>
            <div className="project-content">
              <p>A comprehensive study platform powered by AI that helps students learn more effectively. Includes smart note-taking, adaptive quizzes, and personalized learning paths.</p>
              <div className="project-tech">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">TensorFlow</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Full Stack Developer Intern</h3>
            <div className="date">Infosys Spring Board • Aug 2025 - Oct 2025</div>
            <p>Gained hands-on web development experience through online training, building functional and responsive applications. Developed a full-stack web app using React, Spring Boot, and MySQL, strengthening skills in modern web development.</p>
          </div>

          <div className="timeline-item">
            <h3>Web Development Intern</h3>
            <div className="date">Astonish Infotech • Dec 2024 - Jan 2025</div>
            <p>Acquired real-time experience in full-stack web development through in-plant training. Enhanced proficiency in coding, application design, and developing responsive web interfaces.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Certifications & Achievements</h2>
        <div className="certifications-grid">
          <div className="cert-card">
            <h4>🏆 Certifications</h4>
            <p>Elite in Programming in Java (69%) - NPTEL<br />Introduction to Machine Learning (68%) - NPTEL<br />Java Foundation Certification - Infosys Springboard</p>
          </div>
          <div className="cert-card">
            <h4>🎓 Achievements</h4>
            <p>Paper Presentation on Smart City Management<br />Workshop on Augmented Reality</p>
          </div>
        </div>
      </section>

      <button
        className={`back-to-top ${showBackToTop ? 'active' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>

      <footer>
      </footer>
    </>
  )
}
