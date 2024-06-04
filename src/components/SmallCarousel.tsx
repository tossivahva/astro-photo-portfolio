import type { ImagesType } from '../utils/images.ts';
import React from 'react';

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

export default SmallCarousel;
