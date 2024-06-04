import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { menuItems, collections } from '@/config/nav-links';

const DesktopNavigationMenu = () => {
    return (
        
        // TODO: Try with Radix Ui Dialog component instead of navigation menu
        
        // TODO: Add subtle micro animations and transitions (Hover, onClick)
        
        <NavigationMenu.Root className='relative z-[1] flex w-screen justify-center'>
            <NavigationMenu.List className='center m-0 flex list-none rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 p-2'>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className='text-white/70 hover:text-white group flex select-none items-center justify-between gap-[2px] rounded-full px-3 py-2 text-sm font-medium leading-none outline-none'>
                        Collections{' '}
                        <CaretDownIcon
                            className='text-white relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180'
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className='absolute top-0 left-0 w-full sm:w-auto'>
                        <ul className='m-0 list-none gap-x-[10px] py-3 px-2 sm:w-[220px] sm:grid-flow-col'>
                            {collections.map((item, id) => (
                                <li
                                    key={id}
                                    className='text-white/70 hover:text-white block select-none rounded-lg px-3 py-2 text-sm font-medium leading-none no-underline outline-none'
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                
                {menuItems.map((item, id) => (
                    <NavigationMenu.Item key={id}>
                        <NavigationMenu.Link
                            className='text-white/70 hover:text-white group flex select-none items-center justify-between gap-1 rounded-full px-3 py-2 text-sm font-medium leading-none outline-none'
                        >
                            {item.name}
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                ))}
                
                <NavigationMenu.Indicator className='data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]'>
                    <div className='relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-black/60 border border-white/10'/>
                </NavigationMenu.Indicator>
            </NavigationMenu.List>
            
            <div className='perspective-[2000px] absolute top-full left-0 flex w-fit translate-x-full justify-center'>
                <NavigationMenu.Viewport className='data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-xl bg-black/60 backdrop-blur-2xl border border-white/10 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]'/>
            </div>
        </NavigationMenu.Root>
    );
};

export default DesktopNavigationMenu;
