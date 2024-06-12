import { motion } from 'framer-motion';

const HoverLink = ({ href, target, children }) => {
    return (
        <motion.a
            href={href}
            target={target}
            className="text-sm"
            whileHover={{ x: 5, color: "#3498db" }}
        >
            {children}
        </motion.a>
    );
};

export default HoverLink;
