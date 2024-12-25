import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Terminus Calculator</h1>
        <p className="text-xl">Your ultimate companion for Path of Exile 2 builds and skill planning</p>
      </div>
    </div>
  );
};

export default Banner;