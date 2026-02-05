import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        // Check localStorage for theme preference
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setIsDark(savedTheme === 'dark')
        }
    }, [])

    useEffect(() => {
        // Apply theme to body
        document.body.classList.toggle('dark', isDark)
        document.body.classList.toggle('light', !isDark)
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }, [isDark])

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <div className="app">
            <div className="grid-background"></div>
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
