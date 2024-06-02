import React, { useMemo, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import {
    type ImagesType,
    images,
    randomImagesSet1,
    randomImagesSet2,
} from '../utils/images.ts';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';

const Carousel = () => {
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
        <motion.div
            animate={carouselVariant}
            className='bg-background flex flex-col gap-y-5 py-16'
        >
            <div
                ref={carouselWrapperRef}
                className='overflow-clip mt-[-100vh] h-[300vh]'
            >
                <div className='sticky top-0 h-screen flex items-center'>
                    <div className='flex w-full gap-5 left-1/2 -translate-x-1/2'>
                        <motion.div
                            style={{
                                opacity: sideCarouselItems,
                                x: sideCarouselLeft,
                            }}
                            className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip'
                        >
                            <img
                                className='w-full h-full object-cover aspect-video'
                                src={images[0].path}
                                alt={images[0].name}
                            />
                        </motion.div>
                        <motion.div
                            style={{ scale: customScale }}
                            className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip z-10'
                        >
                            <img
                                className='w-full h-full object-cover aspect-video'
                                src={images[1].path}
                                alt={images[1].name}
                            />
                        </motion.div>
                        <motion.div
                            style={{
                                opacity: sideCarouselItems,
                                x: sideCarouselRight,
                            }}
                            className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip'
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
                    inactive: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.5 }}
                className='-mt-[calc((100vh-(370px*(16/9)))/2)] space-y-5'
            >
                <SmallCarousel images={randomImagesSet1}/>
                <SmallCarousel images={randomImagesSet2}/>
            </motion.div>
        </motion.div>
    );
};

const SmallCarousel = ({ images }: { images: ImagesType[] }) => {
    return (
        <div className='flex gap-5 overflow-clip'>
            {images.map((image, index) => (
                <div className='w-[23vw] h-full aspect-video shrink-0'>
                    <img
                        className='w-full h-full object-cover rounded-xl'
                        src={image.path}
                        alt={image.name}
                        key={index}
                    /></div>
            ))}
        </div>
    );
};

export default Carousel;
