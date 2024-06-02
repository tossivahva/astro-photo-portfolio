import React, { useRef } from 'react';
import {
    type ImagesType,
    images,
    randomImagesSet1,
    randomImagesSet2,
} from '../utils/images.ts';
import { useScroll, useTransform, motion } from 'framer-motion';

const Carousel = () => {
    const carouselWrapperRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: carouselWrapperRef,
        offset: ['start start', 'end start'],
    });
    
    const bip = useTransform(scrollYProgress,
        [0.3, 0.5, 0.66],
        [3, 2.5, 1]);
    
    return (
        <div className='bg-background flex flex-col gap-y-5 py-16'>
            <div
                ref={carouselWrapperRef}
                className='overflow-clip mt-[-100vh] h-[300vh]'
            >
                <div className='sticky top-0 h-screen flex items-center'>
                    <div className='flex w-full gap-5 left-1/2 -translate-x-1/2'>
                        <div className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip'>
                            <img
                                className='w-full h-full object-cover aspect-video'
                                src={images[0].path}
                                alt={images[0].name}
                            />
                        </div>
                        <motion.div
                            style={{ scale: bip }}
                            className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip'
                        >
                            <img
                                className='w-full h-full object-cover aspect-video'
                                src={images[1].path}
                                alt={images[1].name}
                            />
                        </motion.div>
                        <div className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip'>
                            <img
                                className='w-full h-full object-cover aspect-video'
                                src={images[2].path}
                                alt={images[2].name}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SmallCarousel images={randomImagesSet1}/>
            <SmallCarousel images={randomImagesSet2}/>
        </div>
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
