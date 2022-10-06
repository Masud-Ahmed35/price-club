import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Features = ({ feature }) => {
    return (
        <div className='flex items-center gap-2 mt-3'>
            <CheckCircleIcon className='h-4 w-4'></CheckCircleIcon>
            <p>{feature}</p>
        </div>
    );
};

export default Features;