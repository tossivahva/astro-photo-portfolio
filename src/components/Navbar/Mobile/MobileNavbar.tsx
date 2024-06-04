import '@/styles/global.css';

import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { Menu } from '@/components/Navbar/Mobile/Menu';
import { MenuToggle } from '@/components/Navbar/Mobile/MenuToggle'
import { useEffect } from 'react';

const menuContainer = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 30,
            restDelta: 0.01,
        },
    },
    closed: {
        y: '-100%',
        opacity: 0.5,
        transition: {
            delay: 0.35,
            type: 'spring',
            stiffness: 400,
            damping: 30,
        },
    },
};

export const MobileNavbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);
    
    return (
        <AnimatePresence mode='sync'>
            <motion.nav
                className='fixed top-0 w-full h-16 inset-0 bg-zinc-900/70 backdrop-blur-xl border-b border-white/10 lg:hidden'
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                exit='closed'
            >
                <motion.div className='container mx-auto h-full text-white flex items-center justify-between'>
                    <motion.div className='text-2xl'>Logo</motion.div>
                    
                    <motion.div
                        className='fixed inset-0 w-full h-screen bg-zinc-950'
                        variants={menuContainer}
                    >
                        <Menu/>
                    </motion.div>
                    
                    <MenuToggle toggle={() => toggleOpen()}/>
                </motion.div>
            </motion.nav>
        </AnimatePresence>
    );
};
