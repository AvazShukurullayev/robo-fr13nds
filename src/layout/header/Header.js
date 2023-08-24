import "./Header.css"

const Header = () => {
    return (
        <header className="header mb-5 p-3 bg-warning shadow">
            <div className="container">
                <nav className="nav d-flex align-items-center justify-content-between">
                    <a href="#!" className="nav__logo">R0b0Fr13nds</a>
                    <ul className="nav__list d-flex align-items-center gap-4">
                        <li><a href="#!" className="fs-3 nav__link">About</a></li>
                        <li><a href="#!" className="fs-3 nav__link">Contact</a></li>
                        <li><a href="#!" className="fs-3 nav__link">Support</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header