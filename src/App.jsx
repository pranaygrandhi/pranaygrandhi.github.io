import './App.css'

function App() {
  return (
    <div className="portfolio-app">
      <header className="resume-header">
        <div>
          <p className="eyebrow">Cybersecurity Engineer</p>
          <h1>Pranay Grandhi</h1>
          <p className="headline">
            Undergraduate security engineer specializing in network security,
            cryptography, ethical hacking, and secure Linux systems.
          </p>
        </div>

        <div className="header-actions">
          <a className="btn btn-primary" href="mailto:pranaygrandhi9@gmail.com">
            Email Me
          </a>
          <a
            className="btn btn-primary btn-download"
            href="/Pranay_Grandhi_Resume.pdf"
            onClick={async (e) => {
              e.preventDefault();
              try {
                const res = await fetch('/Pranay_Grandhi_Resume.pdf');
                if (!res.ok) throw new Error('Network response not ok');
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'Pranay_Grandhi_Resume.pdf';
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
              } catch (err) {
                console.error('Download failed, falling back to direct link', err);
                window.location.href = '/Pranay_Grandhi_Resume.pdf';
              }
            }}
          >
            Download Resume
          </a>
        </div>
      </header>

      <main className="resume-main">
        <section className="resume-overview">
          <div className="overview-card">
            <h2>Professional profile</h2>
            <p>
              Practical cybersecurity undergraduate experienced in network
              defense, packet analysis, vulnerability research and secure
              system hardening. I focus on measurable results, strong threat
              awareness, and defending real-world infrastructure.
            </p>
          </div>

          <div className="detail-cards">
            <article>
              <h3>Location</h3>
              <p>Andhra Pradesh, India</p>
            </article>
            <article>
              <h3>Email</h3>
              <p>
                <a href="mailto:pranaygrandhi9@gmail.com">pranaygrandhi9@gmail.com</a>
              </p>
            </article>
            <article>
              <h3>Phone</h3>
              <p>+91 82973 80938</p>
            </article>
          </div>
        </section>

        <section className="resume-section" id="about">
          <div className="section-heading">
            <span>About</span>
            <h2>Strong defender of networks, data, and secure systems.</h2>
          </div>

          <div className="text-grid">
            <div>
              <p>
                I analyze security gaps across network protocols, Linux
                environments, and cryptographic implementations. My goal is to
                create solutions that are easy to audit, hard to exploit, and
                effective under pressure.
              </p>
            </div>
            <div>
              <ul>
                <li>Network security monitoring and packet-level analysis</li>
                <li>Cryptography and attack simulation</li>
                <li>Linux security and secure tooling</li>
                <li>Incident response and vulnerability assessment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resume-section" id="experience">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Recent work and hands-on security projects.</h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <p className="timeline-date">VoIP Security Analysis</p>
              <h3>Protocol inspection and attack detection</h3>
              <p>
                Evaluated SIP and RTP traffic to identify MITM and replay
                attack patterns. Used packet capture tools and protocol
                validation to harden VoIP communications.
              </p>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Cryptographic Attack Simulation</p>
              <h3>Resilience testing and secure design</h3>
              <p>
                Built attack scenarios for brute-force and timing analysis to
                validate cryptographic protections and improve implementation
                hardening.
              </p>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">CPU-GPU Security Research</p>
              <h3>Memory isolation and side-channel awareness</h3>
              <p>
                Researched CPU-GPU memory isolation, identifying potential
                vulnerabilities and recommending mitigations for secure
                heterogeneous compute environments.
              </p>
            </article>
          </div>
        </section>

        <section className="resume-section" id="skills">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Technical capabilities and security tools.</h2>
          </div>

          <div className="skills-grid">
            <span>Network Security</span>
            <span>Cryptography</span>
            <span>Ethical Hacking</span>
            <span>Wireshark</span>
            <span>Python</span>
            <span>Linux Security</span>
            <span>Vulnerability Assessment</span>
            <span>Secure Systems</span>
          </div>
        </section>

        <section className="resume-section" id="education">
          <div className="section-heading">
            <span>Education</span>
            <h2>Security-focused studies and technical foundation.</h2>
          </div>

          <div className="education-card">
            <h3>Undergraduate in Cybersecurity</h3>
            <p>Focused on network security, cryptography, secure systems, and threat analysis.</p>
          </div>
        </section>

        <section className="resume-section contact-section" id="contact">
          <div className="section-heading">
            <span>Contact</span>
            <h2>Let's connect on projects, research, or security roles.</h2>
          </div>

          <div className="contact-card-large">
            <div className="contact-info">
              <h3>Reach out</h3>
              <p>
                Email: <a href="mailto:pranaygrandhi9@gmail.com">pranaygrandhi9@gmail.com</a>
              </p>
              <p>Phone: +91 82973 80938</p>
              <div className="contact-footer">
                <a href="https://www.linkedin.com/in/pranay-grandhi/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/pranaygrandhi" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <div className="contact-action">
              <a className="btn btn-primary btn-message" href="mailto:pranaygrandhi9@gmail.com">
                Send a message
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App;
