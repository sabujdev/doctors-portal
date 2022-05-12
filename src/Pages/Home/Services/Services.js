import React from 'react';
// import cavity from '../../../assets/images/cavity.png';
// import fluoride from '../../../assets/images/fluoride.png';
// import whitening from '../../../assets/images/whitening.png';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from '../Service/Service';




const Services = () => {

    const services =[
        {
            _id:1,
            name:'Fluoride Treatment',
            description:'If a dog chews shoes whose shoes does he choose?',
            img:fluoride
        },
        {
            _id:2,
            name:'Fluoride Treatment',
            description:'If a dog chews shoes whose shoes does he choose?',
            img:cavity
        },
        { 
            _id:3,
            name:'Fluoride Treatment',
            description:'If a dog chews shoes whose shoes does he choose?',
            img:whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center text-xl font-bold'>
                <h3 className='uppercase font-bold text-secondary'>Our services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                   services.map(service =><Service key={service._id}
                   service={service}></Service>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Services;