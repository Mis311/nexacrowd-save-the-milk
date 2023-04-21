import React, { useState } from "react";
import QRCode from "qrcode.react";
import Navbar from "../components/layout/Navbar";
import Image from "next/image";
const hardcodedNftData = {
  title: "Mighty Cow",
  description: "MoMo Nation Project",
  image: "/nfts/cow1.png",
  width: 300,
  height: 300,
  slug: "/nfts/mighty-cow",
};

const ProductPage = ({ nftData = hardcodedNftData }) => {
  const [randomQR, setRandomQR] = useState("");

  const generateRandomQR = () => {
    const randomValue = Math.random().toString(36).substring(2);
    setRandomQR(randomValue);
  };

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-24 mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <Image
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
    </>
  );
};

export default ProductPage;
