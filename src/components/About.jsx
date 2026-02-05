import { useEffect, useRef } from 'react'

function About() {
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

        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const skills = [
        {
            icon: '💻',
            title: 'Frontend',
            description: 'React, Next.js, TypeScript, Tailwind CSS'
        },
        {
            icon: '⚙️',
            title: 'Backend',
            description: 'Node.js, Express, PostgreSQL, MongoDB'
        },
        {
            icon: '🚀',
            title: 'DevOps',
            description: 'Docker, AWS, CI/CD, Kubernetes'
        },
        {
            icon: '🤖',
            title: 'GenAI',
            description: 'LangChain, OpenAI, RAG, Prompt Engineering'
        }
    ]

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">
                    <span className="section-label">About</span>
                    A bit about me.
                </h2>

                <div className="about-content">
                    <div className="about-text reveal">
                        <p className="about-intro">
                            I'm a <strong>Full Stack Developer</strong> and <strong>Computer Programming</strong> student at Seneca College, based in <strong>Toronto, Canada</strong>.
                        </p>
                        <p>
                            I'm passionate about building modern, secure, and intelligent web applications. My journey started with Android development, and now I focus on <strong>Full Stack Development</strong>, <strong>Web3</strong>, and <strong>Generative AI</strong>.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring cutting-edge tech, contributing to open source, or volunteering at <strong>Enactus</strong>.
                        </p>
                    </div>

                    <div className="skills-grid reveal">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.title}
                                className="skill-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="skill-icon">{skill.icon}</div>
                                <h3>{skill.title}</h3>
                                <p>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
