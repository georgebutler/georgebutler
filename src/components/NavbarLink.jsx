import { motion } from 'framer-motion';

const NavbarLink = ({ href, target, children }) => {
    return (
        <motion.a
            href={href}
            target={target}
            className="text-sm"
            whileHover={{ 
                color: "#3498db",
                delay: 0,
            }}
            animate={{
                transition: {
                    delay: 0,
                    duration: 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }
            }}
        >
            {children}
        </motion.a>
    );
};

export default NavbarLink;