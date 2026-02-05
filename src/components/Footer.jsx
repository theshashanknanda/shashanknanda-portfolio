function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    Designed & Built by <strong>Shashank Nanda</strong> © {new Date().getFullYear()}
                </p>
                <p className="footer-subtext">
                    Made with ☕ in Toronto, Canada
                </p>
            </div>
        </footer>
    )
}

export default Footer
