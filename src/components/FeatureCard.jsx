import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
