import React from 'react';
import {
    type ImagesType,
    images,
    randomImagesSet1,
    randomImagesSet2,
} from '../utils/images.ts';

const Carousel = () => {
    return (
        <div className='bg-background flex flex-col gap-y-5 py-16'>
            <div className='overflow-clip'>
                <div className='flex w-full gap-5 left-1/2 -translate-x-1/2'>
                    <div className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip'>
                        <img
                            className='w-full h-full object-cover aspect-video'
                            src={images[0].path}
                            alt={images[0].name}
                        />
                    </div>
                    <div className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip'>
                        <img
                            className='w-full h-full object-cover aspect-video'
                            src={images[1].path}
                            alt={images[1].name}
                        />
                    </div>
                    <div className='w-[66.66vw] shrink-0 rounded-2xl overflow-clip'>
                        <img
                            className='w-full h-full object-cover aspect-video'
                            src={images[2].path}
                            alt={images[2].name}
                        />
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
