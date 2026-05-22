import './App.css'

function App() {
  return (
    <div className="portfolio-app">
      <header className="site-header">
        <a href="#top" className="brand">
          Pranay Grandhi
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <span className="eyebrow">Cybersecurity Engineer</span>
            <h1>Secure systems, resilient networks, and practical risk reduction.</h1>
            <p>
              I build and evaluate security tools for networks, cryptography,
              Linux environments, and threat analysis. My work is focused on
              concrete results, hands-on vulnerability research, and reliable
              defenses.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:pranaygrandhi9@gmail.com">
                Email Me
              </a>
              <a
                className="btn btn-secondary"
                href="https://github.com/pranaygrandhi"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-content">
              <p className="panel-title">Core strengths</p>
              <ul>
                <li>Network Security</li>
                <li>Cryptography</li>
                <li>Ethical Hacking</li>
                <li>Vulnerability Assessment</li>
                <li>Python & Linux</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-intro">
            <span>About Me</span>
            <h2>Focused on security research, dependable systems, and actionable defenses.</h2>
          </div>

          <div className="section-grid">
            <div>
              <p>
                I am an undergraduate cybersecurity engineer with experience in
                network analysis, secure system design, and practical incident
                response. I enjoy turning technical security concepts into real
                protection strategies.
              </p>
            </div>

            <div>
              <ul className="about-list">
                <li>Analyzed SIP/RTP traffic for VoIP security</li>
                <li>Simulated cryptographic attacks and hardening</li>
                <li>Investigated CPU-GPU isolation vulnerabilities</li>
                <li>Designed secure Linux-based lab tooling</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-intro">
            <span>Skills</span>
            <h2>Tools and technologies I use to secure systems.</h2>
          </div>

          <div className="skill-grid">
            <article className="skill-card">
              <h3>Security</h3>
              <p>Network monitoring, threat modeling, vulnerability discovery, and incident response.</p>
            </article>
            <article className="skill-card">
              <h3>Cryptography</h3>
              <p>Encryption, authentication, secure key handling, and attack simulation.</p>
            </article>
            <article className="skill-card">
              <h3>Tools</h3>
              <p>Wireshark, Python, Linux, packet analysis, and secure tooling workflows.</p>
            </article>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-intro">
            <span>Projects</span>
            <h2>Selected work that shows real cybersecurity impact.</h2>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <h3>VoIP Security Analysis</h3>
              <p>Identified MITM and replay attack vectors in SIP/RTP traffic using packet capture and protocol validation.</p>
            </article>
            <article className="project-card">
              <h3>Cryptographic Attack Simulation</h3>
              <p>Built attack simulations to test encryption resilience against brute-force and timing techniques.</p>
            </article>
            <article className="project-card">
              <h3>CPU-GPU Security Research</h3>
              <p>Examined memory isolation gaps and side-channel risk in heterogeneous computing platforms.</p>
            </article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-intro">
            <span>Contact</span>
            <h2>Ready to collaborate on security research or defence-focused engineering.</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:pranaygrandhi9@gmail.com">pranaygrandhi9@gmail.com</a>
              </p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p>+91 82973 80938</p>
            </div>
            <div className="contact-card">
              <h3>Location</h3>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Pranay Grandhi. Built with React and Vite.</p>
      </footer>
    </div>
  )
}

export default App;
