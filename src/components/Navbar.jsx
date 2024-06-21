import NavbarLink from './NavbarLink';

const Navbar = () => {
    return (
        <nav>
            <div className="container mt-4">
                <div className="flex flex-row gap-4 font-bold tracking-tighter py-4">
                    <NavbarLink href="/" target="">Home</NavbarLink>
                    <NavbarLink href="/blog" target="">Blog</NavbarLink>
                    <NavbarLink href="/experiments" target="">Experiments</NavbarLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;