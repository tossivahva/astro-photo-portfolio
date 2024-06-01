import React from 'react';
import Container from './Container.tsx';
import FadeIn from './FadeIn.tsx';

const Tags = () => {
    return (
        <Container className='relative z-10 pb-36 text-white text-6xl leading-tight font-semibold space-y-10 flex flex-col justify-start'>
            <FadeIn>
                <p>
                    New Apple Originals every month — always ad‑free.
                </p>
            </FadeIn>
            <FadeIn>
                <p>
                    Stream on the Apple TV app on Apple devices, smart TVs,
                    consoles,
                    or sticks.
                </p>
            </FadeIn>
            <FadeIn>
                <p>
                    Watch in 4K HDR video with immersive Spatial Audio.
                </p>
            </FadeIn>
            <FadeIn>
                <p>
                    Share a single subscription with up to five people.
                </p>
            </FadeIn>
        </Container>
    );
};

export default Tags;
