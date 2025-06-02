// Craeting a header component for my application
const Header = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <h2 className="title">
                    <a href="/">Where in the world?</a>
                </h2>
                <p className="theme-changer">
                    <i className="ri-moon-fill"></i>
                </p>
            </div>
        </header>
    )
}

export default Header;