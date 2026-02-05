import { useEffect, useRef, useState } from 'react'

const projectsData = [
    {
        id: 'codecrate',
        label: 'Featured Project',
        title: 'CodeCrate',
        tagline: 'Online Cloud-Based Code Editor & Learning Platform',
        description: 'A comprehensive online education platform driving innovation in learning. Features include user authentication, course enrollment with progress tracking, video tutorials, and a live code editor with real-time output.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Auth'],
        github: 'https://github.com/theshashanknanda/codecrate',
        demo: 'https://codecrate-three.vercel.app/',
        images: [
            '/images/codecrate-1.png',
            '/images/codecrate-2.png',
            '/images/codecrate-3.png',
            '/images/codecrate-4.png',
            '/images/codecrate-5.png'
        ]
    },
    {
        id: 'pingbase',
        label: 'Featured Project',
        title: 'Pingbase',
        tagline: 'Website Uptime & Monitoring Tool',
        description: 'Keep your websites always online with real-time monitoring. Features include instant downtime alerts, response time tracking, uptime statistics, and a beautiful dashboard to view all your monitored websites.',
        tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Turborepo'],
        github: 'https://github.com/theshashanknanda/pingbase',
        demo: 'https://pingbase-web.onrender.com/',
        images: [
            '/images/pingbase-1.png',
            '/images/pingbase-2.png',
            '/images/pingbase-3.png',
            '/images/pingbase-4.png'
        ]
    }
]

function ProjectCard({ project, reverse }) {
    const [activeImage, setActiveImage] = useState(0)

    return (
        <article className={`project-card ${reverse ? 'reverse' : ''}`}>
            <div className="project-header">
                <div className="project-info">
                    <span className="project-label">{project.label}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                </div>
            </div>

            <div className="project-content">
                <div className="project-gallery">
                    <div className="gallery-main">
                        <img
                            src={project.images[activeImage]}
                            alt={`${project.title} screenshot`}
                            className="gallery-image"
                        />
                    </div>
                    <div className="gallery-thumbs">
                        {project.images.map((img, index) => (
                            <button
                                key={index}
                                className={`thumb ${activeImage === index ? 'active' : ''}`}
                                onClick={() => setActiveImage(index)}
                            >
                                <img src={img} alt={`${project.title} thumbnail ${index + 1}`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="project-details">
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                        {project.tech.map(tech => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>

                    <div className="project-links">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            <svg className="icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <svg className="icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

function Projects() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal, .project-card')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="projects section" id="projects" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">
                    <span className="section-label">Projects</span>
                    Things I've built.
                </h2>

                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        reverse={index % 2 === 1}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects
