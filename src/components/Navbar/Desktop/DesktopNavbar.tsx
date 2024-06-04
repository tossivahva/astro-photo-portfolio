import DesktopNavigationMenu from '@/components/Navbar/Desktop/NavMenu';

export const DesktopNavbar = () => {
    return (
        <nav className='fixed z-50 top-0 w-full h-16 inset-0 hidden lg:block'>
            <div className='container h-full flex justify-between items-center text-white'>
                <DesktopNavigationMenu/>
            </div>
        </nav>
    );
};
