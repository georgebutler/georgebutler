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

export default NavbarLink;