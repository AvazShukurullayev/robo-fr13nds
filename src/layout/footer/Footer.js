const Footer = () => {
    return <footer className="footer p-4 shadow mt-5 bg-warning">
        <div className="container">
            <h5 className="footer__title text-center">&copy; Copyright Reserved {new Date().getFullYear()}</h5>
        </div>
    </footer>
}

export default Footer