export type ImagesType = {
    path: string,
    name: string,
}
export const images: ImagesType[] = [
    { path: './images/family-a-1.jpg', name: 'Family 1' },
    { path: '/images/family-a-2.jpg', name: 'Family 2' },
    { path: '/images/freewalk-a-1.jpg', name: 'Freewalk 1' },
    { path: '/images/freewalk-a-2.jpg', name: 'Freewalk 2' },
    { path: '/images/freewalk-a-3.jpg', name: 'Freewalk 3' },
    { path: '/images/freewalk-a-4.jpg', name: 'Freewalk 4' },
    { path: '/images/wedding-a-1.jpg', name: 'Wedding 1' },
    { path: '/images/wedding-a-2.jpg', name: 'Wedding 2' },
    { path: '/images/wedding-a-3.jpg', name: 'Wedding 3' },
];

export const randomImagesSet1 = images
    .sort(() => Math.random() - 0.5)
    .concat(images.sort(() => Math.random() - 0.5))
    .concat(images.sort(() => Math.random() - 0.5));

export const randomImagesSet2 = images
    .sort(() => Math.random() - 0.5)
    .concat(images.sort(() => Math.random() - 0.5))
    .concat(images.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);


