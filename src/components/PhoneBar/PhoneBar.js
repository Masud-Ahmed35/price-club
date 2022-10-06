import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;
                })
                // console.log(phoneData);
                setPhones(phoneData);
            })

    }, [])

    return (
        <div className='my-11'>
            <BarChart width={1500} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </BarChart>
        </div>
    );
};

export default PhoneBar;