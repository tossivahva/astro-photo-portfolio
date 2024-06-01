/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                'background': '#000',
                'background-secondary': '#161617cc',
                'white': '#fff',
                'textBlack': '#1d1d1f',
                'textWhite': '#f5f5f7',
                'textDim': '#a1a1a6',
            }
        },
    },
    plugins: [],
};
