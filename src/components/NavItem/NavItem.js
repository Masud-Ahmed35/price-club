import React from 'react';

const NavItem = ({ route }) => {
    const { name, path } = route;

    return (
        <div>
            <li className='mr-12 text-xl font-bold'>
                <a href={path}>{name}</a>
            </li>
        </div>
    );
};

export default NavItem;