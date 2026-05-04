import { getAnimals } from '@/lib/data';
import React from 'react';

const Featured = async() => {
    const animalsData = await getAnimals();
    console.log(animalsData);
    return (
        <div>
            
        </div>
    );
};

export default Featured;