import { useEffect, useRef, useState } from 'react'

function Header({ isDark, toggleTheme }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const lampRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLampClick = () => {
        // Add a subtle animation to the lamp
        if (lampRef.current) {
            lampRef.current.classList.add('lamp-clicked')
            setTimeout(() => {
                lampRef.current.classList.remove('lamp-clicked')
            }, 300)
        }
        toggleTheme()
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="nav container">
                <a href="#" className="logo">
                    <span className="logo-text">shashank</span>
                </a>

                <ul className="nav-links">
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>

                {/* Hanging Lamp Toggle */}
                <div className="lamp-container" ref={lampRef}>
                    <svg className={`lamp ${isDark ? 'lamp-on' : ''}`} viewBox="0 0 100 200" width="30" height="50">
                        {/* Cord */}
                        <line x1="50" y1="0" x2="50" y2="50" className="lamp-cord" strokeWidth="3" />

                        {/* Lamp fixture */}
                        <rect x="42" y="48" width="16" height="10" className="lamp-fixture" rx="3" />

                        {/* Lamp shade */}
                        <path d="M25 58 L50 58 L75 58 L68 100 L32 100 Z" className="lamp-shade" />

                        {/* Light bulb */}
                        <ellipse cx="50" cy="92" rx="10" ry="12" className="lamp-bulb" />

                        {/* Light cone (visible in DARK mode - lamp illuminates the darkness) */}
                        <path
                            d="M32 100 L5 195 L95 195 L68 100 Z"
                            className="lamp-light"
                            style={{ opacity: isDark ? 1 : 0 }}
                        />
                    </svg>
                    <button
                        className="lamp-toggle"
                        aria-label="Toggle dark/light mode"
                        onClick={handleLampClick}
                    >
                        <span className="lamp-pull-string"></span>
                        <span className="lamp-pull-handle"></span>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
