import React from 'react';
import { motion } from 'framer-motion';

type FadeInProps = {
    children: React.ReactNode,
}

const FadeIn = ({ children }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '100% 0px -200px 0px' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
