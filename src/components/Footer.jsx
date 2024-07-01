const Footer = ({ children }) => {
    return (
        <footer>
            <div className="container my-4">
                <div className="flex flex-row gap-4 font-bold tracking-tighter py-4">
                    {children}
                </div>
            </div>
        </footer>
    );
}

export default Footer;