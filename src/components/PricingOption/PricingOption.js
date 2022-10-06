import React from 'react';
import Features from '../Features/Features';

const PricingOption = ({ pricingOption }) => {
    const { name, price, features } = pricingOption;

    return (
        <div className='bg-amber-400 p-5 m-5 border-4 border-double rounded-lg shadow-2xl'>
            <div>
                <h3 >
                    <span className='text-4xl font-bold'>${price}</span>
                    <span className='text-gray-100'>/mon</span>
                </h3>
                <p className='text-2xl mt-2'>{name}</p>
            </div>
            <div>
                {
                    features.map((feature, idx) => <Features
                        key={idx}
                        feature={feature}
                    ></Features>)
                }
                <button className='w-full text-gray-300 hover:bg-amber-700 bg-green-700 text-xl font-bold py-2 mt-5 rounded-lg'>Buy Now</button>
            </div>
        </div>
    );
};

export default PricingOption;