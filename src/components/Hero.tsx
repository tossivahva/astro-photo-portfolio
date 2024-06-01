import React, { useRef } from 'react';
import Container from './Container.tsx';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const heroContainerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroContainerRef,
        offset: ['start start', 'end end'],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.3, 0]);
    
    return (
        <div className='relative'>
            <motion.div
                style={{ opacity }}
                ref={heroContainerRef}
                className='absolute top-0 left-0 w-full h-[150svh]'
            >
                <img
                    src='/images/family-a-1.jpg'
                    alt='hero image'
                    className='sticky top-0 h-screen w-full object-cover'
                />
            </motion.div>
            <Container className='relative z-10 h-[100svh]'>
                <motion.div
                    className='h-full flex flex-col items-start justify-center'
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },
                    }}
                    whileInView={'visible'}
                    exit={'hidden'}
                    animate={'hidden'}
                    viewport={{ amount: 0.9 }}
                >
                    <h1 className='font-bold text-9xl text-white'>
                        Kate Weber.
                    </h1>
                </motion.div>
            </Container>
        </div>
    );
};

export default Hero;
