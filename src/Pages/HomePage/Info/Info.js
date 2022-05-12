import React from 'react';
import InfoCard from '../InfoCard/InfoCard'
import clock from '../../assets/icons/clock.svg'
import Marker from '../../assets/icons/marker.svg'
import Phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

          <InfoCard  cardTitle='Opening Hours' bgColor="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>

          <InfoCard cardTitle='Opening Hours' bgColor="bg-accent" img={Marker}></InfoCard>
          

          <InfoCard cardTitle='Opening Hours' bgColor="bg-gradient-to-r from-secondary to-primary" img={Phone}></InfoCard>
        

      </div >
    );
};

export default Info;

