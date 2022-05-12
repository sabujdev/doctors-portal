import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            <InfoCard img ={clock} pageTitle='Opening hours' bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard img ={marker} pageTitle='Opening hours' bgColor='bg-accent'></InfoCard>
            <InfoCard img ={phone} pageTitle='Opening hours' bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;