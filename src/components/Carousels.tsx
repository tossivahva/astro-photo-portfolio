import React, { useMemo, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import { images } from '../utils/images.ts';
import { useScroll, useTransform, motion, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import SmallCarouselAnimated from './SmallCarouselAnimated.tsx';
import Button from './Button.tsx';

const Carousels = () => {
    const { width, height } = useWindowSize();
    const carouselWrapperRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: carouselWrapperRef,
        offset: ['start start', 'end start'],
    });
    const maxScale = useMemo(() => {
        const windowYRatio = height / width;
        const xScale = 1.6;
        const yScale = xScale * (16 / 9) * windowYRatio;
        return Math.max(xScale, yScale);
    }, [width, height]);
    
    const customScale = useTransform(scrollYProgress, [0.3, 0.5, 0.66], [maxScale * 1.1, maxScale, 1]);
    
    const sideCarouselItems = useTransform(scrollYProgress, [0.6, 0.66], [0, 1]);
    const sideCarouselLeft = useTransform(scrollYProgress, [0.64, 0.66], [-30, 0]);
    const sideCarouselRight = useTransform(scrollYProgress, [0.64, 0.66], [30, 0]);
    
    const [carouselVariant, setCarouselVariant] = useState<'active' | 'inactive'>('inactive');
    useMotionValueEvent(scrollYProgress, 'change', (progress) => {
        if (progress >= 0.67) {
            setCarouselVariant('active');
        } else {
            setCarouselVariant('inactive');
        }
    });
    
    return (
        <AnimatePresence>
            <motion.div
                animate={carouselVariant}
                className='bg-background'
            >
                <div
                    ref={carouselWrapperRef}
                    className='overflow-clip mt-[-100vh] h-[300vh]'
                >
                    <div className='sticky top-0 h-screen flex items-center'>
                        <div className='flex w-full left-1/2 -translate-x-1/2 gap-4'>
                            <motion.div
                                style={{
                                    opacity: sideCarouselItems,
                                    x: sideCarouselLeft,
                                }}
                                className='w-[66vw] shrink-0 rounded-2xl overflow-clip'
                            >
                                <img
                                    className='w-full h-full object-cover aspect-video'
                                    src={images[0].path}
                                    alt={images[0].name}
                                />
                            </motion.div>
                            <motion.div
                                style={{ scale: customScale }}
                                className='relative w-[66vw] shrink-0 rounded-2xl overflow-clip z-10'
                            >
                                <img
                                    className='w-full h-full object-cover aspect-video'
                                    src={images[1].path}
                                    alt={images[1].name}
                                />
                                <motion.div
                                    className='absolute bottom-0 left-0 w-full flex justify-between items-center p-10'
                                    variants={{
                                        active: { opacity: 1, y: 0 },
                                        inactive: { opacity: 0, y: 15 },
                                    }}
                                
                                >
                                    <h1 className='text-4xl font-bold text-white'>Свадьбы</h1>
                                    <Button
                                        size='medium'
                                        className='opacity-85 font-semibold'
                                    >Смотреть работы
                                    </Button>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                style={{
                                    opacity: sideCarouselItems,
                                    x: sideCarouselRight,
                                }}
                                className='w-[66vw] shrink-0 rounded-2xl overflow-clip'
                            >
                                <img
                                    className='w-full h-full object-cover aspect-video'
                                    src={images[2].path}
                                    alt={images[2].name}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
                <motion.div
                    variants={{
                        active: { opacity: 1, y: 0 },
                        inactive: { opacity: 0, y: 30 },
                    }}
                    transition={{ duration: 0.5 }}
                    className='relative -mt-[calc(100vh-(66vw*(16/9)/2))]'
                >
                    <SmallCarouselAnimated />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Carousels;
