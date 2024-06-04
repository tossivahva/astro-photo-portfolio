import { DesktopNavbar } from '@/components/Navbar/Desktop/DesktopNavbar.tsx';
import { MobileNavbar } from '@/components/Navbar/Mobile/MobileNavbar.tsx';

const Navbar = () => {
    return (
        <>
            <DesktopNavbar/>
            <MobileNavbar/>
        </>
    );
};

export default Navbar;
