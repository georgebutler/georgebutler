import { motion } from 'framer-motion';

const HoverLink = ({ href, target = "", index = 0, children }) => {
    return (
        <motion.a
            href={href}
            target={target}
            className="text-sm"
            whileHover={{
                x: 5,
                color: "#3498db",
                delay: 0
            }}
            initial={{
                opacity: 0,
                y: 14
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    delay: index * 0.1,
                    duration: 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                }
            }}
            key={href}
        >
            {children}
        </motion.a>
    );
};

export default HoverLink;
