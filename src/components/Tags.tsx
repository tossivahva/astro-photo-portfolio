import React from 'react';
import Container from './Container.tsx';
import FadeIn from './FadeIn.tsx';

const Tags = () => {
    return (
        <Container className='relative z-10 pb-36 text-white text-7xl leading-tight font-semibold space-y-16 flex flex-col justify-start'>
            <FadeIn>
                <p>
                    Профессиональная фотография <br/>
                    и уникальные снимки.
                </p>
            </FadeIn>
            <FadeIn>
                <p>
                    Высококлассное оборудование <br/>
                    для съемки.
                </p>
            </FadeIn>
            <FadeIn>
                <p>
                    Обработанные снимки <br/>
                    высокого разрешения.
                </p>
            </FadeIn>
            <FadeIn>
                <p>
                    Разнообразные стили и сцены для <br/>
                    воплощения самых смелых идей.
                </p>
            </FadeIn>
        </Container>
    );
};

export default Tags;
