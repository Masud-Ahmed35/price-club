import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Orders', path: '/orders' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' }
    ];

    return (
        <nav className='bg-purple-200 md:py-3'>
            <div onClick={() => setOpen(!open)} className="h-9 w-9 md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <ul className={`bg-purple-200 w-full md:flex justify-center sm:text-left absolute md:static duration-500 ease-in ${open ? 'top-9' : 'top-[-150px]'}`}>
                {
                    routes.map(route => <NavItem
                        key={route.id}
                        route={route}
                    ></NavItem>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;