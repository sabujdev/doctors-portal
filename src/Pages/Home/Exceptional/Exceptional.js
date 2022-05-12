import React from "react";
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Exceptional = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}alt="#"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="m-20">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates cum aperiam, eos beatae nostrum officia commodi sunt autem inventore facilis explicabo perspiciatis est at tenetur porro iusto laudantium obcaecati.
          </p>
          <PrimaryButton>  Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
