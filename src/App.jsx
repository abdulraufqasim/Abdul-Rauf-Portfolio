import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Hackathon', href: '#hackathon' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const metrics = [
  { value: '2', label: 'Semesters done' },
  { value: '3', label: 'Certifications' },
  { value: 'BSCS', label: 'Data Science' },
];

const skillGroups = [
  [
    { name: 'HTML, CSS & JavaScript', level: '86%', tag: 'Front-end' },
    { name: 'React', level: '58%', tag: 'Learning' },
    { name: 'Python & data concepts', level: '68%', tag: 'Foundations' },
  ],
  [
    { name: 'C++ & OOP', level: '78%', tag: 'Academic' },
    { name: 'Statistics & analytics', level: '72%', tag: 'Coursework' },
    { name: 'Git/GitHub & Azure basics', level: '60%', tag: 'Foundations' },
  ],
];

const highlights = [
  {
    tag: 'Practice work',
    icon: '⌘',
    title: 'Responsive web interfaces',
    text: 'Built responsive pages and UI components with HTML, CSS, JavaScript, and current React learning to improve layouts, interaction, and accessibility.',
  },
  {
    tag: 'Academic foundation',
    icon: '∑',
    title: 'Object-oriented programming',
    text: 'Developed OOP fundamentals in C++ and Java with reusable thinking, structured logic, and problem solving across coursework and exercises.',
  },
  {
    tag: 'Data learning',
    icon: '◌',
    title: 'Statistics for analysis',
    text: 'Explored statistical and mathematical ideas that support data analysis, visualization, and introductory predictive modeling.',
  },
];

const hackathonProject = {
  title: 'CodePilot',
  subtitle: 'IBM Hackathon Project',
  description: 'An AI-powered developer onboarding prototype that helps teams understand an unfamiliar codebase faster through project analysis, code insights, issue discovery, testing guidance, and a prioritized action plan.',
  stack: ['React', 'JavaScript', 'AI workflow', 'Vercel'],
  liveDemo: 'https://code-pilot-wheat-beta.vercel.app/',
};

const certificateGallery = [
  {
    title: 'Meta Front-End Developer',
    alt: 'Meta Front-End Developer certificate',
    src: '/images/1789583708436-k75rqejo.png',
  },
  {
    title: 'Microsoft Introduction to Machine Learning Concepts',
    alt: 'Microsoft Machine Learning certificate',
    src: '/images/1789583708436-6h2vl0qj.png',
  },
  {
    title: 'HP LIFE Data Science & Analytics Basics',
    alt: 'HP LIFE Data Science certificate',
    src: '/images/1789583708436-nc8j5zx5.png',
  },
  {
    title: 'AWS Training & Certification',
    alt: 'AWS certificate',
    src: '/images/1789584150748-mnfasla0.png',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && selectedCertificate) {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = selectedCertificate ? 'hidden' : '';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCertificate]);

  return (
    <div className="page-shell">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="orb orb-three" aria-hidden="true" />

      <header className="topbar">
        <nav className="nav" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Abdul Rauf Qasim home">
            <span className="brand-mark">AR</span>
            <span>Abdul Rauf</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>

          <a href="mailto:abdulraufqasim21@gmail.com" className="nav-cta">Email me</a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            ☰
          </button>
        </nav>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <span className="eyebrow">Seeking Internship · available now</span>
              <h1>
                Building with <span className="gradient-text">data, code, and design.</span>
              </h1>
              <p>
                I am Abdul Rauf Qasim, an aspiring Data Scientist and Front-End Developer based in Pakistan.
                I am immediately available for a full-time internship and open to on-site or remote roles at software houses across Pakistan.
              </p>

              <div className="actions">
                <a href="mailto:abdulraufqasim21@gmail.com?subject=Summer%20internship%20opportunity" className="primary-btn">
                  Start a conversation
                </a>
                <a href="#work" className="ghost-btn">
                  View academic work
                </a>
              </div>

              <div className="hero-metrics" aria-label="Profile metrics">
                {metrics.map((metric) => (
                  <div key={metric.label} className="metric">
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="floating-card">
                <small>Current focus</small>
                <strong>Data + UI</strong>
                <div className="bar"><span style={{ width: '78%' }} /></div>
              </div>

              <div className="floating-card">
                <small>Location</small>
                <strong>Pakistan</strong>
                <div className="bar"><span style={{ width: '90%' }} /></div>
              </div>

              <div className="visual-card" id="visual-card">
                <div className="card-shell">
                  <div className="mini-topbar">
                    <div className="dots">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                    <span>Portfolio / 2026</span>
                  </div>

                  <div className="profile-panel">
                    <div className="avatar" aria-label="Abdul Rauf profile photo">
                                          <img src="/images/rauf.png" alt="Abdul Rauf Qasim" />
                    </div>
                    <div className="profile-details">
                      <h3>Abdul Rauf</h3>
                      <p>Data Science Student<br />JavaScript & React learner</p>
                      <span className="status-chip">Available now</span>
                    </div>
                  </div>

                  <div className="stats-panel">
                    <div className="stat-box">
                      <strong>2025</strong>
                      <span>Started</span>
                    </div>
                    <div className="stat-box">
                      <strong>3</strong>
                      <span>Certs</span>
                    </div>
                    <div className="stat-box">
                      <strong>2</strong>
                      <span>Languages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container about-grid">
            <div className="portrait" data-reveal>
              <div className="portrait-caption">
                <strong>Curious by nature.</strong>
                <span>Analytical in practice.</span>
              </div>
            </div>

            <div className="glass-panel" data-reveal>
              <h2>About & objective</h2>
              <p>
                I am a BSCS (Data Science) student based in Pakistan, currently on summer break after completing my second semester.
                I enjoy turning structured thinking into useful interfaces and clear data stories.
              </p>
              <p>
                My objective is to join a collaborative software team where I can contribute with front-end fundamentals, strengthen my data and machine learning knowledge, and learn through real-world engineering practice.
              </p>
              <div className="list">
                <div className="list-item">Analytical thinking</div>
                <div className="list-item">Problem solving</div>
                <div className="list-item">Collaboration</div>
                <div className="list-item">Quick learner</div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="section-heading" data-reveal>
              <h2>Modern web & data toolkit</h2>
              <p>
                A practical foundation across programming, data, web development, and collaborative habits. React is part of my front-end learning path.
              </p>
            </div>

            <div className="skills-layout" data-reveal>
              {skillGroups.map((group, index) => (
                <div key={index} className="skills-block">
                  {group.map((skill) => (
                    <div key={skill.name} className="skill-row">
                      <div className="skill-head">
                        <span>{skill.name}</span>
                        <span>{skill.tag}</span>
                      </div>
                      <div className="skill-bar">
                        <span style={{ width: skill.level }} />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey">
          <div className="container">
            <div className="section-heading" data-reveal>
              <h2>Education & certifications</h2>
            </div>

            <div className="about-grid">
              <div className="timeline" data-reveal>
                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <small>2025 — Present</small>
                    <h3>BSCS (Data Science)</h3>
                    <p>
                      Second semester completed; currently on summer break. Coursework includes data structures, OOP, database systems,
                      statistics for data science, and discrete mathematics.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-card">
                    <small>Current focus</small>
                    <h3>From algorithms to prediction</h3>
                    <p>
                      Applying structured problem solving, mathematics, and statistics as a base for data analysis and predictive modeling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="cert-grid" data-reveal>
                {certificateGallery.map((item) => (
                 <button
                   key={item.title}
                   type="button"
                   className="cert-card certificate-button"
                   onClick={() => setSelectedCertificate(item)}
                   aria-label={`Open ${item.title} certificate`}
                 >
                   <img src={item.src} alt={item.alt} style={{ maxWidth: '100%' }} />
                   <strong>{item.title}</strong>
                   <span>View certificate</span>
                 </button>
                                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="container">
            <div className="section-heading" data-reveal>
              <h2>Academic highlights</h2>
              <p>Practice and academic work only: honest snapshots of what I have been learning and building with a modern product mindset.</p>
            </div>

            <div className="project-grid" data-reveal>
              {highlights.map((item) => (
                <article key={item.title} className="project-card">
                  <div className="project-icon" aria-hidden="true">{item.icon}</div>
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hackathon" className="hackathon-section">
          <div className="container">
            <div className="hackathon-card" data-reveal>
              <div className="hackathon-copy">
                <span className="eyebrow">Built during IBM Hackathon</span>
                <h2>{hackathonProject.title}</h2>
                <p className="hackathon-subtitle">{hackathonProject.subtitle}</p>
                <p>{hackathonProject.description}</p>

                <div className="hackathon-stack" aria-label="Technologies used">
                  {hackathonProject.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="actions">
                  <a href={hackathonProject.liveDemo} className="primary-btn" target="_blank" rel="noreferrer noopener">
                    Open live prototype ↗
                  </a>
                  <span className="hackathon-note">Source code available on request</span>
                </div>
              </div>

              <div className="hackathon-preview" aria-label="CodePilot feature preview">
                <div className="preview-topbar">
                  <span className="preview-dot" />
                  <span className="preview-dot" />
                  <span className="preview-dot" />
                  <span>CodePilot / prototype</span>
                </div>
                <div className="preview-heading">
                  <small>PROJECT UNDERSTANDING</small>
                  <strong>Understand any codebase faster.</strong>
                </div>
                <div className="preview-grid">
                  <div><strong>01</strong><span>Scan repository</span></div>
                  <div><strong>02</strong><span>Find issues</span></div>
                  <div><strong>03</strong><span>Plan next steps</span></div>
                </div>
                <div className="preview-progress"><span /></div>
                <small className="preview-caption">A guided developer dashboard for faster onboarding.</small>
              </div>
            </div>
          </div>
        </section>

        <section id="availability">
          <div className="container availability-grid">
            <div className="availability-card" data-reveal>
              <div>
                <span className="eyebrow">Open to the right opportunity</span>
                <h2>Ready to learn on a real team.</h2>
                <p>
                  I am immediately available for a full-time internship and open to on-site or remote roles at software houses across Pakistan.
                </p>
                <ul>
                  <li>Front-end development and UI work</li>
                  <li>Data, analytics, and beginner ML support</li>
                  <li>Documentation and presentations</li>
                </ul>
              </div>
              <a href="mailto:abdulraufqasim21@gmail.com?subject=Internship%20opportunity" className="primary-btn">
                Discuss an internship
              </a>
            </div>

            <div className="availability-card" data-reveal>
              <span className="tag">Languages</span>
              <h3>Communication that travels</h3>
              <p>
                <strong>Urdu</strong> — Native<br />
                <strong>English</strong> — Professional Working Proficiency
              </p>
              <p>Comfortable collaborating, managing time, and learning quickly in new environments.</p>
            </div>
          </div>
        </section>

        <section id="profiles">
          <div className="container">
            <div className="section-heading" data-reveal>
              <h2>Find me online</h2>
              <p>Connect on GitHub and LinkedIn — quick links and previews.</p>
            </div>

            <div className="profile-grid" data-reveal>
              <div className="profile-frame">
                <img src="/images/1789583708436-7u8unrf3.png" alt="LinkedIn preview" />
                <div className="profile-overlay">
                  <span>LinkedIn profile</span>
                  <a href="https://www.linkedin.com/in/abdul-rauf-qasim-392671252/" target="_blank" rel="noreferrer noopener">Open LinkedIn ↗</a>
                </div>
              </div>

              <div className="profile-frame">
                <img src="/images/1789583708436-3ys2p3me.png" alt="GitHub preview" />
                <div className="profile-overlay">
                  <span>GitHub profile</span>
                  <a href="https://github.com/abdulraufqasim" target="_blank" rel="noreferrer noopener">Open GitHub ↗</a>
                </div>
              </div>
            </div>

            <div className="section-heading" style={{ marginTop: 20 }}>
              <h2>Certificates</h2>
              <p>Selected verified certificates (click to view where available)</p>
            </div>

            <div className="profile-grid" data-reveal>
              {certificateGallery.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  className="cert-card certificate-button"
                  onClick={() => setSelectedCertificate(item)}
                  aria-label={`Open ${item.title} certificate`}
                >
                                <img src={item.src} alt={item.alt} style={{ maxWidth: '100%' }} />
                  <div style={{ marginTop: 12 }}><strong>{item.title}</strong></div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="contact-box" data-reveal>
              <div>
                <span className="eyebrow">Let's connect</span>
                <h2>Have a internship in mind?</h2>
                <p>Send a message and I would be happy to share more about my coursework, practice work, and availability.</p>
              </div>

              <div className="contact-links">
                <a href="mailto:abdulraufqasim21@gmail.com" className="mail-card">
                  abdulraufqasim21@gmail.com
                </a>
                <a href="https://wa.me/923282087541" className="ghost-btn" target="_blank" rel="noopener noreferrer">WhatsApp: 0328-2087541</a>
                <a href="tel:+923390139878" className="ghost-btn">0339-0139878</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {selectedCertificate && (
        <div className="lightbox-backdrop" onClick={() => setSelectedCertificate(null)} role="dialog" aria-modal="true" aria-label="Certificate preview">
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate preview"
            >
              ×
            </button>
            <img src={selectedCertificate.src} alt={selectedCertificate.alt} className="lightbox-image" />
            <div className="lightbox-caption">
              <strong>{selectedCertificate.title}</strong>
            </div>
          </div>
        </div>
      )}

      <footer>© {new Date().getFullYear()} Abdul Rauf Qasim · Aspiring Data Scientist & Front-End Developer · Pakistan</footer>
    </div>
  );
}

export default App;
