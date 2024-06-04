import React, { useEffect, useState } from 'react';
import { randomImagesSet1 } from '../utils/images.ts';
import Card from './Card.tsx';
import useMeasure from 'react-use-measure';
import { motion, animate, useMotionValue } from 'framer-motion';

const SmallCarouselAnimated = () => {
    const [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);
    
    const FAST_DURATION = 80;
    const SLOW_DURATION = 200;
    
    const [duration, setDuration] = useState(FAST_DURATION);
    
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);
    
    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;
        
        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
            });
        }
        
        
        return controls?.stop;
    }, [xTranslation, width, duration, rerender]);
    
    return (
        <div className='relative h-[212px] overflow-hidden'>
            <motion.div
                ref={ref}
                className='absolute left-0 flex gap-4'
                style={{ x: xTranslation }}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {[...randomImagesSet1, ...randomImagesSet1].map((image, index) => (
                    <Card
                        image={image.path}
                        key={index}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default SmallCarouselAnimated;
