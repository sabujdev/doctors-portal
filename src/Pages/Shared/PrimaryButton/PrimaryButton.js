import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase text-white font-bold">
          {children}
          </button>
        </div>
    );
};

export default PrimaryButton;