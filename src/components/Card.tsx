import React, { useState } from 'react';
import Button from './Button.tsx';
import { AnimatePresence, motion } from 'framer-motion';

interface CardProps {
    image: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
    const [showOverlay, setShowOverlay] = useState(false);
    
    return (
        <motion.div
            className='relative flex h-[212px] min-w-[378px] items-center justify-center overflow-hidden rounded-xl bg-slate-400'
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
        >
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        className='absolute inset-0 z-10 flex justify-center items-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className='absolute pointer-events-none bg-black opacity-50 h-full w-full'/>
                        <motion.h1
                            className='z-10 bg-white rounded-full text-sm px-3 py-2 font-medium flex items-center justify-center hover:opacity-75 cursor-pointer'
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }}
                        >
                        <span>
                            Все фото
                        </span>
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
            <img
                className='h-full w-full object-cover'
                src={image}
            />
        </motion.div>
    );
};

export default Card;
