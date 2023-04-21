import React from "react";
import Image from "next/image";
const FeaturedCard = ({
  title,
  headline,
  imageURL,
  buttonText,
  raisedAmount,
  imageWidth = 300,
  imageHeight = 400,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
      <div className="relative w-full h-64 overflow-hidden rounded-md">
        <Image
          src={imageURL}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          layout="responsive"
          className="w-full object-cover rounded-md"
        />
      </div>

      <h2 className="text-2xl font-bold mb-2 font-lato">{title}</h2>
      <p className="text-lg mb-4 font-nunito">{headline}</p>

      <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
        {buttonText}
      </button>
      <h2 className="font-bold text-lg text-blue-600 mt-2">
        {raisedAmount.toLocaleString("ja-JP", {
          style: "currency",
          currency: "JPY",
        })}
      </h2>
    </div>
  );
};

export default FeaturedCard;
