import React, { useState } from "react";
import { QRCode } from "qrcode.react";

const ProductPage = ({ nftData }) => {
  const [randomQR, setRandomQR] = useState("");

  const generateRandomQR = () => {
    const randomValue = Math.random().toString(36).substring(2);
    setRandomQR(randomValue);
  };

  return (
    <div className="container mx-auto p-24">
      <div className="flex flex-col lg:flex-row items-center">
        <img
          src={nftData.image}
          alt={nftData.title}
          width={nftData.width}
          height={nftData.height}
        />
        <div className="lg:ml-16">
          <h1 className="text-3xl font-semibold mb-6">{nftData.title}</h1>
          <p className="mb-4">{nftData.description}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={generateRandomQR}
          >
            Generate QR Code
          </button>
          {randomQR && (
            <div className="mt-4">
              <QRCode value={randomQR} size={150} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
