import { motion } from 'framer-motion';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: 1 },
        },
    },
    closed: {
        y: -10,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

export const MenuItem = ({ link, title }: { link: string; title: string }) => {
    return (
        <motion.li variants={variants}>
            <a href={link}>
                <div className='block text-3xl font-medium'>{title}</div>
            </a>
        </motion.li>
    );
};
