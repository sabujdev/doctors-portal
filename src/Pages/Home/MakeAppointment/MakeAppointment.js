import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section className='flex my-28 justify-center items-center' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2>Make an appointment Today</h2>
                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsus's that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div className='my-5'><PrimaryButton>Get Started</PrimaryButton></div>
            </div>
            
        </section>
    );
};

export default MakeAppointment;