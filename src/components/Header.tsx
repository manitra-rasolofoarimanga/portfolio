import { useCallback, useEffect, useState } from "react";
import { Navbar, Collapse, Typography, IconButton, } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const NavList = () => {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-brown-sugar font-bold' : '') + " flex items-center justify-center lg:justify-normal hover:text-brown-sugar transition-colors"}>
                    About
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/my-stack" className={({ isActive }) => (isActive ? 'text-brown-sugar font-bold' : '') + " flex items-center justify-center lg:justify-normal hover:text-brown-sugar transition-colors"}>
                    My Stack
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/projects" className={({ isActive }) => (isActive ? 'text-brown-sugar font-bold' : '') + " flex items-center justify-center lg:justify-normal hover:text-brown-sugar transition-colors"}>
                    Projects
                </NavLink> 
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-brown-sugar font-bold' : '') + " flex items-center justify-center lg:justify-normal hover:text-brown-sugar transition-colors"}>
                    Contact
                </NavLink>
            </Typography>
        </ul>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();


    const handleWindowResize = useCallback(() => {
        if (window.innerWidth >= 960) {
            setOpenNav(false);
        }
    }, []);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (window.innerWidth <= 960 && currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
            setOpenNav(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        setOpenNav(false);
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.addEventListener('scroll', handleScroll);
        };
    }, [handleWindowResize, handleScroll, location]);

    return (
        <Navbar className={`sticky top-0 z-50 px-6 pt-8 pb-3 shadow-none bg-beige rounded-none border-none transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex items-center justify-between text-blue-gray-900">
                <NavLink className="font-extrabold text-[20px] flex items-center" to="/">
                    <img src={logo} alt="Manitra RASOLOFOARIMANGA's Logo" className="me-2" width="36px" height="36px" />
                    <span className="text-wenge font-extrabold hidden lg:block">Manitra R.</span>
                </NavLink>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    aria-label="Ouvrir le menu"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}

export default Header;