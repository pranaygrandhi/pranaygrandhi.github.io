import './App.css'

function App() {
  return (
    <div className="portfolio-app">
      <header className="resume-header">
        <div>
          <p className="eyebrow">Cybersecurity & Aerospace Systems Engineer</p>
          <h1>Pranay Grandhi</h1>
          <p className="headline">
            Computer Science (Cyber Security) undergraduate specializing in network security,
            cryptography, vulnerability assessment, secure system design, and aerospace systems.
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
            <h2>Career Objective</h2>
            <p>
              Computer Science (Cyber Security) undergraduate with a strong foundation in network security,
              cryptography, vulnerability assessment, and secure system design. Passionate about solving
              complex engineering challenges and applying cybersecurity principles to mission-critical systems.
              Highly interested in space technology, aerospace engineering, rocket systems, and embedded
              technologies. Currently contributing to the IN-SPACe Rocketry Student Competition as a Critical
              Design Review (CDR) qualified team member. Seeking opportunities to combine cybersecurity,
              software development, and engineering skills to build secure and innovative aerospace systems.
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
            <h2>Strong foundation in cybersecurity, systems engineering, and rocketry.</h2>
          </div>

          <div className="text-grid">
            <div>
              <p>
                I analyze security gaps across network protocols, systems, and cryptographic implementations.
                I bridge the gap between cybersecurity and engineering, applying rigorous security models to
                both software infrastructure and aerospace systems like sounding rockets.
              </p>
            </div>
            <div>
              <ul>
                <li>Network security monitoring and traffic analysis</li>
                <li>Vulnerability assessment & penetration testing</li>
                <li>Embedded & aerospace systems security</li>
                <li>Key management and cryptographic hardening</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resume-section" id="experience">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Professional cybersecurity internships.</h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <p className="timeline-date">Jul 2025 -- Oct 2025</p>
              <h3>Ethical Hacking Intern</h3>
              <p className="timeline-company" style={{ color: '#62e8f7', marginBottom: '8px', fontWeight: 600 }}>EduSkills</p>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Conducted vulnerability assessments and penetration testing on simulated environments.</li>
                <li>Identified security weaknesses and proposed mitigation strategies following industry best practices.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Jul 2024 -- Oct 2024</p>
              <h3>Network Security Associate Intern</h3>
              <p className="timeline-company" style={{ color: '#62e8f7', marginBottom: '8px', fontWeight: 600 }}>Fortinet | EduSkills</p>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Analyzed network traffic and identified vulnerabilities using industry-standard security tools.</li>
                <li>Applied firewall, IDS, and network security concepts to strengthen cybersecurity knowledge.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="resume-section" id="projects">
          <div className="section-heading">
            <span>Projects</span>
            <h2>Key engineering and cybersecurity projects.</h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <p className="timeline-date">Aerospace & Systems Engineering</p>
              <h3>IN-SPACe Rocketry Student Competition</h3>
              <p className="timeline-role" style={{ color: '#62e8f7', marginBottom: '8px', fontWeight: 600 }}>Critical Design Review (CDR) Qualifier</p>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Successfully qualified for the <strong>Critical Design Review (CDR)</strong> after clearing the <strong>Preliminary Design Review (PDR)</strong> in the national-level IN-SPACe Rocketry Student Competition.</li>
                <li>Collaborated with a multidisciplinary engineering team in the design and development of a student-built sounding rocket.</li>
                <li>Contributed to subsystem design, engineering calculations, system integration, and technical documentation following aerospace engineering standards.</li>
                <li>Participated in design validation, risk assessment, trade-off analysis, and preparation of technical reports and presentations for the CDR evaluation.</li>
                <li>Strengthened knowledge of rocket systems, systems engineering, aerospace design principles, and space technologies through practical project experience.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Network Security Project</p>
              <h3>Security Analysis of VoIP & Video Communication Infrastructure</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Analyzed VoIP protocols (SIP and RTP) across 100+ packets using Wireshark.</li>
                <li>Identified Man-in-the-Middle (MITM) and replay attacks.</li>
                <li>Implemented Secure RTP (SRTP) and TLS encryption for secure communication.</li>
                <li>Performed packet-level traffic analysis and evaluated communication security.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Cryptography Project</p>
              <h3>Practical Attacks and Countermeasures for Cryptosystems</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Simulated brute-force, timing, and cryptographic attacks.</li>
                <li>Designed secure countermeasures using robust key management techniques.</li>
                <li>Improved system security by reducing vulnerability exposure.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Computer Architecture Security</p>
              <h3>Security Analysis of CPU-GPU Coupled Architectures</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Investigated vulnerabilities in heterogeneous CPU-GPU architectures.</li>
                <li>Identified memory leakage and side-channel attack risks.</li>
                <li>Proposed secure memory isolation techniques to improve system resilience.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="resume-section" id="skills">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Technical capabilities and security tools.</h2>
          </div>

          <div className="skills-categories-grid">
            <div className="skills-category-card">
              <h3>Programming Languages</h3>
              <div className="skills-tags">
                <span>Python</span>
                <span>C</span>
                <span>C++</span>
                <span>Java</span>
              </div>
            </div>
            <div className="skills-category-card">
              <h3>Cybersecurity</h3>
              <div className="skills-tags">
                <span>Ethical Hacking</span>
                <span>Vulnerability Assessment</span>
                <span>Threat Analysis</span>
                <span>Network Security</span>
                <span>Cryptography</span>
              </div>
            </div>
            <div className="skills-category-card">
              <h3>Tools</h3>
              <div className="skills-tags">
                <span>Wireshark</span>
                <span>Nmap</span>
                <span>Burp Suite</span>
                <span>Linux</span>
              </div>
            </div>
            <div className="skills-category-card">
              <h3>Developer & Core</h3>
              <div className="skills-tags">
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Secure Comm.</span>
                <span>Info Security</span>
                <span>System Security</span>
              </div>
            </div>
          </div>
        </section>

        <section className="resume-section" id="education">
          <div className="section-heading">
            <span>Education</span>
            <h2>Security-focused studies and academic background.</h2>
          </div>

          <div className="education-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
              <h3 style={{ margin: 0 }}>B.Tech in Computer Science and Engineering (Cyber Security)</h3>
              <span style={{ color: '#62e8f7', fontWeight: 600 }}>2024 -- Present</span>
            </div>
            <p style={{ color: '#f4fbff', marginBottom: '8px', fontWeight: 600 }}>SRM Institute of Science and Technology</p>
            <p style={{ color: '#bdc9d9' }}>CGPA: <strong style={{ color: '#62e8f7' }}>9.27</strong></p>
          </div>
        </section>

        <section className="resume-section" id="certifications">
          <div className="section-heading">
            <span>Certifications</span>
            <h2>Professional credentials and audits.</h2>
          </div>

          <div className="certifications-grid">
            <div className="certification-card">
              <div className="certification-icon">🔒</div>
              <div className="certification-info">
                <h4>Fortinet Certified Associate (FCA)</h4>
              </div>
            </div>
            <div className="certification-card">
              <div className="certification-icon">🛡️</div>
              <div className="certification-info">
                <h4>Fortinet Certified Fundamentals (FCF)</h4>
              </div>
            </div>
            <div className="certification-card">
              <div className="certification-icon">🌐</div>
              <div className="certification-info">
                <h4>Cisco Network Defence</h4>
              </div>
            </div>
            <div className="certification-card">
              <div className="certification-icon">📋</div>
              <div className="certification-info">
                <h4>ISO/IEC 27001:2022 Lead Auditor</h4>
              </div>
            </div>
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
                <a href="https://linkedin.com/in/pranay-grandhi" target="_blank" rel="noreferrer">
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
