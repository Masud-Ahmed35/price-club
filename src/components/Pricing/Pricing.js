import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Nai Feature',
                'Ache Feature',
                'Surprise Feature',
                'Sudden Feature',
                'Slow Feature',
                'Useable Feature'
            ]
        },
        {
            id: 2, name: 'Premium', price: 9.99, features: [
                'Awesome Feature',
                'Nai Feature',
                'Ache Feature',
                'Surprise Feature',
                'Sudden Feature',
                'Slow Feature',
                'Useable Feature'
            ]
        },
        {
            id: 3, name: 'Platinum', price: 19.99, features: [
                'Awesome Feature',
                'Nai Feature',
                'Ache Feature',
                'Surprise Feature',
                'Sudden Feature',
                'Slow Feature',
                'Useable Feature'
            ]
        }
    ];

    return (
        <div>
            <h2 className='text-3xl font-semibold mt-7 bg-indigo-300 text-white py-5'>---Best Deal of The Town---</h2>
            <div className='grid md:grid-cols-3 mt-5'>
                {
                    pricingOptions.map(pricingOption => <PricingOption
                        key={pricingOption.id}
                        pricingOption={pricingOption}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;