import { useEffect, useRef } from 'react'

function Hero() {
    const heroRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = heroRef.current?.querySelectorAll('.animate-in')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="hero-content container">
                <div className="hero-text">
                    <p className="hero-greeting animate-in">
                        <span className="wave">👋</span>
                        <span className="handwriting">Hi, I'm Shashank</span>
                    </p>
                    <h1 className="hero-title animate-in">
                        I build <span className="highlight">modern</span>,
                        <span className="highlight"> scalable</span> web apps
                        with a passion for <span className="highlight">clean code</span>.
                    </h1>
                    <p className="hero-subtitle animate-in">
                        Full Stack Developer • DevOps Explorer • GenAI Enthusiast
                    </p>
                    <div className="hero-cta animate-in">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>

                <div className="hero-illustration animate-in">
                    <div className="desk-scene">
                        {/* Monitor */}
                        <div className="monitor">
                            <div className="monitor-screen">
                                <div className="code-lines">
                                    <span className="code-line"></span>
                                    <span className="code-line"></span>
                                    <span className="code-line"></span>
                                    <span className="code-line short"></span>
                                    <span className="code-line"></span>
                                    <span className="code-line short"></span>
                                </div>
                            </div>
                            <div className="monitor-stand"></div>
                        </div>

                        {/* Desk */}
                        <div className="desk"></div>

                        {/* Plant */}
                        <div className="plant">
                            <div className="pot"></div>
                            <div className="leaves">
                                <div className="leaf leaf-1"></div>
                                <div className="leaf leaf-2"></div>
                                <div className="leaf leaf-3"></div>
                            </div>
                        </div>

                        {/* Coffee Mug */}
                        <div className="coffee-mug">
                            <div className="steam">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span className="scroll-text">scroll</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default Hero
