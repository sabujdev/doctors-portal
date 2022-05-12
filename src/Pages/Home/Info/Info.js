import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-10'>
            <InfoCard img ={clock} pageTitle='Opening hours' bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard img ={marker} pageTitle='Opening hours' bgColor='bg-accent'></InfoCard>
            <InfoCard img ={phone} pageTitle='Opening hours' bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;