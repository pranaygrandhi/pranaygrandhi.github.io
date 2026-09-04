import './App.css'

function App() {
  return (
    <div className="portfolio-app">
      <header className="resume-header">
        <div>
          <p className="eyebrow">Cybersecurity & Systems Engineering</p>
          <h1>Pranay Grandhi</h1>
          <p className="headline">
            Computer Science and Cyber Security undergraduate specializing in vulnerability assessment,
            penetration testing, network security, web application security, authentication & authorization,
            encryption fundamentals, security monitoring, incident response concepts, and secure system design.
          </p>
        </div>

        <div className="header-actions">
          <a className="btn btn-primary" href="mailto:pranaygrandhi9@gmail.com">
            Email Me
          </a>
          <a
            className="btn btn-primary btn-download"
            href="/Pranay_Grandhi_Resume.pdf?v=latest"
            onClick={async (e) => {
              e.preventDefault();
              try {
                const res = await fetch('/Pranay_Grandhi_Resume.pdf?t=' + Date.now(), { cache: 'no-store' });
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
                window.location.href = '/Pranay_Grandhi_Resume.pdf?t=' + Date.now();
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
            <h2>Professional Summary</h2>
            <p>
              Computer Science and Cyber Security undergraduate with a strong foundation in cybersecurity, network security, vulnerability
              assessment, web application security, authentication and authorization, encryption fundamentals, security monitoring, incident
              response concepts, and secure system design. Hands-on experience in vulnerability assessment, penetration testing, network traffic
              analysis, attack identification, and security analysis using Wireshark, Nmap, Burp Suite, and Linux. Knowledge of TCP/IP, DNS,
              HTTP/HTTPS, firewalls, common network threats, OWASP Top 10, security controls, and security best practices. Demonstrated
              analytical, problem-solving, research, documentation, and communication skills by identifying and addressing vulnerabilities in
              application, system, and network environments, reflecting a strong commitment to security best practices.
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
                I analyze security gaps across network protocols, web applications, and system infrastructure.
                I bridge the gap between cybersecurity and systems engineering, applying rigorous security models to
                both software infrastructure and aerospace systems like sounding rockets.
              </p>
            </div>
            <div>
              <ul>
                <li>Vulnerability Assessment & Penetration Testing (Wireshark, Nmap, Burp Suite, Linux)</li>
                <li>Web Application & Network Security (OWASP Top 10, TCP/IP, DNS, Firewalls, IDS)</li>
                <li>Security Monitoring, Incident Response Concepts & Threat Analysis</li>
                <li>Embedded & Aerospace Systems Security (IN-SPACe CDR Qualifier)</li>
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
                <li>Conducted vulnerability assessments and penetration testing in simulated and authorized environments to identify security weaknesses.</li>
                <li>Applied ethical hacking methodologies to analyze vulnerabilities and evaluate application and system security.</li>
                <li>Identified security weaknesses and proposed mitigation and remediation strategies following security best practices.</li>
                <li>Applied ethical hacking methodologies, including penetration testing and code analysis, to identify vulnerabilities and strengthen application and system security, resulting in enhanced overall protection.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Jul 2024 -- Oct 2024</p>
              <h3>Network Security Associate Intern</h3>
              <p className="timeline-company" style={{ color: '#62e8f7', marginBottom: '8px', fontWeight: 600 }}>Fortinet | EduSkills</p>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Analyzed network traffic and identified potential security vulnerabilities using industry-standard security tools.</li>
                <li>Applied firewall, IDS, network security, TCP/IP, and basic network security concepts to strengthen security analysis capabilities.</li>
                <li>Studied network configurations, security controls, common network threats, and attack patterns in security-focused environments.</li>
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
              <p className="timeline-date">Cybersecurity Project</p>
              <h3>Security Analysis of Internet-Based Voice and Video Communication Infrastructure</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Analyzed SIP and RTP VoIP protocols across 100+ packets using Wireshark for network and security analysis.</li>
                <li>Performed packet-level traffic analysis to identify unusual communication patterns and security weaknesses.</li>
                <li>Identified Man-in-the-Middle (MITM) and replay attack scenarios through protocol and network traffic analysis.</li>
                <li>Implemented Secure RTP (SRTP) and TLS encryption to improve communication security.</li>
                <li>Evaluated secure communication mechanisms and encryption fundamentals for protecting network traffic.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Cybersecurity Project</p>
              <h3>Practical Attacks and Countermeasures for Cryptosystems</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Simulated brute-force, timing, and cryptographic attacks to analyze vulnerabilities in cryptographic systems.</li>
                <li>Designed security countermeasures using robust key management and encryption techniques.</li>
                <li>Evaluated attack scenarios and recommended security improvements to reduce vulnerability exposure.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Cybersecurity Project</p>
              <h3>Security Analysis of CPU--GPU Coupled Architectures</h3>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Investigated security vulnerabilities in heterogeneous CPU--GPU architectures.</li>
                <li>Identified memory leakage and side-channel attack risks affecting system security.</li>
                <li>Proposed secure memory isolation techniques to improve system resilience and reduce security exposure.</li>
              </ul>
            </article>

            <article className="timeline-item">
              <p className="timeline-date">Additional Project Experience</p>
              <h3>IN-SPACe Rocketry Student Competition</h3>
              <p className="timeline-role" style={{ color: '#62e8f7', marginBottom: '8px', fontWeight: 600 }}>Critical Design Review (CDR) Qualifier</p>
              <ul style={{ paddingLeft: '20px', margin: 0, color: '#bdc9d9', lineHeight: 1.8 }}>
                <li>Successfully advanced to the <strong>Critical Design Review (CDR)</strong> by passing the <strong>Preliminary Design Review (PDR)</strong> in the national-level IN-SPACe Rocketry Student Competition.</li>
                <li>Collaborated with a multidisciplinary engineering team on the design and development of a student-built sounding rocket.</li>
                <li>Contributed to subsystem design, system integration, engineering calculations, and technical documentation.</li>
                <li>Participated in design validation, risk assessment, trade-off analysis, and preparation of technical reports and presentations.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="resume-section" id="skills">
          <div className="section-heading">
            <span>Technical & Soft Skills</span>
            <h2>All technical capabilities, security concepts, and soft skills from resume.</h2>
          </div>

          <div className="skills-categories-grid">
            <div className="skills-category-card">
              <h3>Cybersecurity</h3>
              <div className="skills-tags">
                <span>Vulnerability Assessment</span>
                <span>Penetration Testing</span>
                <span>Ethical Hacking</span>
                <span>Web Application Security</span>
                <span>Network Security</span>
                <span>System Security</span>
                <span>Threat Analysis</span>
                <span>Security Controls</span>
                <span>Security Monitoring</span>
                <span>Incident Response Concepts</span>
                <span>Information Security</span>
              </div>
            </div>
            <div className="skills-category-card">
              <h3>Network Security</h3>
              <div className="skills-tags">
                <span>TCP/IP</span>
                <span>DNS</span>
                <span>HTTP/HTTPS</span>
                <span>Firewalls</span>
                <span>IDS</span>
                <span>Network Traffic Analysis</span>
                <span>Common Network Threats</span>
                <span>Attack Patterns</span>
                <span>Secure Communication</span>
              </div>
            </div>
            <div className="skills-category-card">
              <h3>Application Security</h3>
              <div className="skills-tags">
                <span>Authentication</span>
                <span>Authorization</span>
                <span>Input Validation</span>
                <span>Secure Coding Fundamentals</span>
                <span>OWASP Top 10</span>
                <span>Web Application Security</span>
              </div>
            </div>
            <div className="skills-category-card">
              <h3>Security Tools & Platforms</h3>
              <div className="skills-tags">
                <span>Linux</span>
                <span>Wireshark</span>
                <span>Nmap</span>
                <span>Burp Suite</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Visual Studio Code</span>
              </div>
            </div>
            <div className="skills-category-card">
              <h3>Security Concepts</h3>
              <div className="skills-tags">
                <span>Encryption Fundamentals</span>
                <span>Cryptography</span>
                <span>Vulnerability Management</span>
                <span>Security Best Practices</span>
                <span>Risk Assessment</span>
                <span>Security Analysis</span>
              </div>
            </div>
            <div className="skills-category-card">
              <h3>Programming Languages</h3>
              <div className="skills-tags">
                <span>Python</span>
                <span>C</span>
                <span>C++</span>
                <span>Java</span>
              </div>
            </div>
            <div className="skills-category-card" style={{ gridColumn: '1 / -1' }}>
              <h3>Soft Skills</h3>
              <div className="skills-tags">
                <span>Analytical Thinking</span>
                <span>Problem Solving</span>
                <span>Technical Documentation</span>
                <span>Communication</span>
                <span>Continuous Learning</span>
                <span>Critical Thinking</span>
                <span>Time Management</span>
                <span>Curiosity</span>
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
              <h3 style={{ margin: 0 }}>SRM Institute of Science and Technology</h3>
              <span style={{ color: '#62e8f7', fontWeight: 600 }}>2024 -- Present</span>
            </div>
            <p style={{ color: '#f4fbff', marginBottom: '8px', fontWeight: 600 }}>B.Tech -- Computer Science and Engineering (Cyber Security)</p>
            <p style={{ color: '#bdc9d9' }}>CGPA: <strong style={{ color: '#62e8f7' }}>9.33</strong></p>
          </div>
        </section>

        <section className="resume-section" id="certifications">
          <div className="section-heading">
            <span>Certifications & Training</span>
            <h2>Professional credentials and training from resume.</h2>
          </div>

          <div className="certifications-grid">
            <div className="certification-card">
              <div className="certification-icon">🎓</div>
              <div className="certification-info">
                <h4>Cybersecurity Professional</h4>
              </div>
            </div>
            <div className="certification-card">
              <div className="certification-icon">🛡️</div>
              <div className="certification-info">
                <h4>Cybersecurity Associate - SOC Analyst (Ongoing)</h4>
              </div>
            </div>
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
