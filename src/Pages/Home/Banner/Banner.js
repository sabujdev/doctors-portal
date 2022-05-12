import React from "react";
import chair from "../../../assets/images/chair.png";
// inport chairbg from '../../../assets/images/bg.png'
import charibg from '../../../assets/images/bg.png'
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen " style={{background:`url(${charibg})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="#" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here.</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dolore, sint. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Provident soluta facilis tempora vero. Dolorum velit corporis
            quia porro aperiam aliquid.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
