import { useEffect } from "react"

const skills = [
  { name: "Java", mark: "JV", category: "Programming Languages" },
  { name: "Python", mark: "PY", category: "Programming Languages" },
  { name: "HTML", mark: "H5", category: "Frontend" },
  { name: "CSS", mark: "C3", category: "Frontend" },
  { name: "JavaScript", mark: "JS", category: "Programming Languages" },
  { name: "JPA", mark: "JP", category: "Backend" },
  { name: "Spring Boot", mark: "SB", category: "Backend" },
  { name: "MySQL", mark: "MY", category: "Database" },
  { name: "React", mark: "RE", category: "Frontend" },
  { name: "React Native", mark: "RN", category: "Frontend" },
  { name: "Redis", mark: "RD", category: "Database" },
  { name: "Oracle", mark: "OR", category: "Database" },
]

const tools = [
  { name: "IntelliJ", mark: "IJ" },
  { name: "Eclipse", mark: "EC" },
  { name: "Git", mark: "GT" },
  { name: "GitHub", mark: "GH" },
  { name: "Visual Studio Code", mark: "VS" },
  { name: "Docker Desktop", mark: "DK" },
  { name: "Android Studio", mark: "AS" },
]

const projects = [
  {
    name: "Lacheln",
    href: "https://github.com/ZEYHNOS/Lacheln",
    image: "https://opengraph.githubassets.com/1/ZEYHNOS/Lacheln",
    description:
      "캡스톤 디자인 프로젝트입니다. SDM 개별 상품 및 패키지 등록·운영을 위한 파트너 시스템과 장바구니, 결제, 채팅 기능을 갖춘 고객 서비스 플랫폼입니다.",
    role: "백엔드 개발 · 업체 회원가입, Admin, 신고 처리",
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "React",
      "JavaScript",
      "Tailwind",
      "Vite",
    ],
    notion:
      "https://www.notion.so/Lacheln-35e89e537d9080a8899dea6a0b08486d?source=copy_link",
  },
  {
    name: "My WorkOut",
    href: "https://github.com/shahid11-01/My-WorkOut",
    image: "https://opengraph.githubassets.com/1/shahid11-01/My-WorkOut",
    description:
      "사용자가 개인화된 운동 계획을 수립하고, 일정을 관리하며, 운동 결과를 기록 및 분석할 수 있도록 돕는 웹 애플리케이션입니다.",
    role: "백엔드 및 프론트엔드 개발 · 운동 일정 관리, 결과 분석 피드백, UI/UX",
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "MySQL",
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
    notion:
      "https://www.notion.so/My-WorkOut-36489e537d9080129301e4093eb36478?source=copy_link",
  },
  {
    name: "Gatherly",
    href: "https://github.com/shahid11-01/Gatherly",
    image: "https://opengraph.githubassets.com/1/shahid11-01/Gatherly",
    description:
      "사용자가 쉽게 모임을 생성하고 참여하며, 참여 요청을 관리할 수 있는 커뮤니티 플랫폼입니다.",
    role: "백엔드 및 프론트엔드 개발 · 모임/사용자 관리, 소셜 로그인, JWT, Redis, UI/UX",
    technologies: [
      "Java",
      "Spring Boot",
      "JPA",
      "MySQL",
      "JWT",
      "Redis",
      "Swagger",
      "React Native",
      "JavaScript",
      "TypeScript",
    ],
    frontend: "https://github.com/shahid11-01/Gatherly-client",
    notion:
      "https://app.notion.com/p/Gatherly-3ce89e537d90803fab3fc9817f689eee?source=copy_link",
  },
]

export default function App() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("#main > section[id]"),
    )
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("#nav a"),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        links.forEach((link) => {
          link.classList.toggle("active", link.hash === `#${visible.target.id}`)
        })
      },
      { rootMargin: "-25% 0px -55%", threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="header">
        <header>
          <span className="image avatar">
            <img
              src="https://github.com/shahid11-01.png"
              alt="간바로브 샤히드 프로필"
            />
          </span>
          <h1 id="logo">
            <a href="#one">간바로브 샤히드</a>
          </h1>
          <p className="sidebar-role">BACKEND DEVELOPER</p>
        </header>
        <nav id="nav" aria-label="포트폴리오 섹션">
          <ul>
            <li>
              <a href="#one" className="active">
                Introduction
              </a>
            </li>
            <li>
              <a href="#two">SkillSet</a>
            </li>
            <li>
              <a href="#three">Portfolio</a>
            </li>
            <li>
              <a href="#four">Awards &amp; Certs</a>
            </li>
            <li>
              <a href="#five">Contact</a>
            </li>
          </ul>
        </nav>
        <footer>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/shahid11-01"
                className="icon brands fa-github"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>
            </li>
            <li>
              <a
                href="mailto:shahid.ganbarov@gmail.com"
                className="icon solid fa-envelope"
                aria-label="Email"
              >
                @
              </a>
            </li>
          </ul>
        </footer>
      </section>

      <div id="wrapper">
        <div id="main">
          <section id="one">
            <div className="container">
              <p className="eyebrow">INTRODUCTION · BACKEND ENGINEERING</p>
              <h2>Introduction</h2>
              <p className="intro-lead">
                국경을 넘어 시스템의 안정성을 설계하는
                <br />
                백엔드 개발자 간바로브 샤히드입니다.
              </p>
              <p className="intro-copy">
                아제르바이잔에서 한국으로의 여정은 저에게 단순한 이동이 아닌{" "}
                <strong>&apos;도전&apos;</strong>의 과정이었습니다. <br />
                <strong>한국 정부 초청 장학생(GKS)</strong>으로 선발되어 1년
                간의 한국어 습득과 3년 동안 영진전문대학교 소프트웨어 전공
                과정을 거치며, <br />
                실무에 필요한 프로그래밍 지식을 체계적으로 학습하고 복잡한
                비즈니스 로직도 끈기 있게 풀어낼 수 있는 역량을 길렀습니다.
              </p>

              <hr />
              <h3>Overall Experiences</h3>
              <div className="experience-list">
                <article>
                  <p className="date">2023.08 — 2026.08</p>
                  <h4>영진전문대학교 컴퓨터정보계열</h4>
                </article>
                <article>
                  <p className="date">2025.12.06 — 2025.12.07</p>
                  <h4>NVIDIA 인공지능 혁신공유대학 특강 수료</h4>
                </article>
                <article>
                  <p className="date">2026.01.14 — 2026.01.15</p>
                  <h4>경주 취업 역량 강화 캠프</h4>
                  <p>
                    협업 역량과 직무 분석 프로그램에 참여하여 팀 프로젝트에서
                    발생할 수 있는 의사소통 문제를 조율하고, 백엔드 개발자로서
                    갖춰야 할 실무적인 태도를 익혔습니다.
                  </p>
                </article>
                <article>
                  <p className="date">2026.08.06 — 2026.08.07</p>
                  <h4>GKS 취업 역량 지원 프로그램</h4>
                  <p>
                    GKS 장학생으로서 취업 역량 지원 프로그램에 참여해 이력서
                    작성법을 익히고 실전 면접 경험을 쌓았습니다.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <hr className="gold" />

          <section id="two">
            <div className="container">
              <p className="eyebrow">TECHNICAL FOUNDATION</p>
              <h2>SkillSet</h2>
              <h4>사용하는 언어 및 프레임워크</h4>
              <ul className="feature-icons skills-grid">
                {skills.map((skill) => (
                  <li key={skill.name} className="icon solid fa-code">
                    <span className="tech-mark" aria-hidden="true">
                      {skill.mark}
                    </span>
                    <span className="skill-copy">
                      <small>{skill.category}</small>
                      <strong>{skill.name}</strong>
                    </span>
                  </li>
                ))}
              </ul>

              <h4>개발 도구</h4>
              <ul className="feature-icons tools-grid">
                {tools.map((tool) => (
                  <li key={tool.name} className="icon solid fa-code">
                    <span className="tech-mark" aria-hidden="true">
                      {tool.mark}
                    </span>
                    <span className="skill-copy">
                      <small>DevOps / Tools</small>
                      <strong>{tool.name}</strong>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className="gold" />

          <section id="three">
            <div className="container">
              <p className="eyebrow">SELECTED ENGINEERING WORK</p>
              <h2>Portfolio</h2>
              <div className="features">
                {projects.map((project, index) => (
                  <article key={project.name}>
                    <a
                      href={project.href}
                      className="image"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} GitHub`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.name} 프로젝트`}
                      />
                      <span className="project-index">0{index + 1}</span>
                    </a>
                    <div className="inner">
                      <p className="project-type">
                        CASE STUDY · WEB APPLICATION
                      </p>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <p className="project-role">
                        <span>MY ROLE</span>
                        {project.role}
                      </p>
                      <p className="tech-stack" aria-label="사용 기술">
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </p>
                      <h4 className="detail-title">상세 보기</h4>
                      <div className="project-links">
                        <a href={project.href} target="_blank" rel="noreferrer">
                          GitHub {project.frontend ? "Backend" : "Repository"}
                          <span aria-hidden="true">↗</span>
                        </a>
                        {project.frontend && (
                          <a
                            href={project.frontend}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub Frontend
                            <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        <a
                          href={project.notion}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Notion Documentation
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <hr className="gold" />

          <section id="four">
            <div className="container">
              <p className="eyebrow">RECOGNITION &amp; LEARNING</p>
              <h3>Awards &amp; Certificates</h3>
              <div className="features certificate-grid">
                <article>
                  <div className="inner">
                    <span className="certificate-mark" aria-hidden="true">
                      NV
                    </span>
                    <p className="certificate-label">NVIDIA · CERTIFICATE</p>
                    <h4>NVIDIA 공식 수료 인증서</h4>
                    <p className="certificate-name">
                      Building Transformer-Based NLP Applications
                    </p>
                    <p className="issuer">발급 · NVIDIA</p>
                    <a
                      href="https://learn.nvidia.com/certificates?id=SmWybhMCSaOqKbvMhQnuFw"
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-link"
                    >
                      인증서 보기 <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
                <article>
                  <div className="inner">
                    <span className="certificate-mark" aria-hidden="true">
                      KR
                    </span>
                    <p className="certificate-label">LANGUAGE · PROFICIENCY</p>
                    <h4>TOPIK (한국어능력시험)</h4>
                    <p className="certificate-name">Level 5급</p>
                    <p className="issuer">발급 · 국립국제교육원</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <hr className="gold" />

          <section id="five">
            <div className="container">
              <p className="eyebrow">LET&apos;S BUILD RELIABLE SYSTEMS</p>
              <h3>Contact</h3>
              <p className="contact-intro">
                새로운 기술과 협업의 기회를 환영합니다.
              </p>
              <ul className="contact-list">
                <li>
                  <span className="icon solid fa-phone" aria-hidden="true">
                    TEL
                  </span>
                  <span>
                    <strong>전화번호</strong>
                    <a href="tel:01051991729">010-5199-1729</a>
                  </span>
                </li>
                <li>
                  <span className="icon solid fa-envelope" aria-hidden="true">
                    @
                  </span>
                  <span>
                    <strong>이메일</strong>
                    <a href="mailto:shahid.ganbarov@gmail.com">
                      shahid.ganbarov@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <span className="icon brands fa-github" aria-hidden="true">
                    GH
                  </span>
                  <span>
                    <strong>GitHub</strong>
                    <a
                      href="https://github.com/shahid11-01"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/shahid11-01
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <section id="footer">
          <div className="container">
            <ul className="copyright">
              <li>&copy; 2026 간바로브 샤히드</li>
              <li>BACKEND DEVELOPER</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
