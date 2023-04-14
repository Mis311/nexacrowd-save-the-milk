import React from 'react';

const FeaturedCard = ({ title, headline, buttonText }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
      <h2 className="text-2xl font-bold mb-2 font-lato">{title}</h2>
      <p className="text-lg mb-4 font-nunito">{headline}</p>
      <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">{buttonText}</button>
    </div>
  );
};

export default FeaturedCard;
