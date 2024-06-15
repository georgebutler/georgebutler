import { motion } from 'framer-motion';

const NavbarLink = ({ href, target, children }) => {
    return (
        <motion.a
            href={href}
            target={target}
            className="text-sm"
            whileHover={{ color: "#3498db" }}
        >
            {children}
        </motion.a>
    );
};

const Navbar = () => {
    return (
        <nav>
            <div className="container mt-4">
                <div className="flex flex-row gap-4 font-bold tracking-tighter">
                    <NavbarLink href="/" target="">Home</NavbarLink>
                    <NavbarLink href="/blog" target="">Blog</NavbarLink>
                    <NavbarLink href="/experiments" target="">Experiments</NavbarLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;