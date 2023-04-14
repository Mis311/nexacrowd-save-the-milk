import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="bg-cover bg-no-repeat bg-center w-full h-screen rounded-lg overflow-hidden relative"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(/images/toppage-cow.png)",
      }}
    >
      {/* Smaller container for the main image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div
          className="bg-cover bg-no-repeat bg-center w-11/12 h-3/4 rounded-lg overflow-hidden"
          style={{
            backgroundImage: "url(/images/toppage-cow.png)",
          }}
        >
          {/* Your header content goes here */}
          <div className="absolute inset-0 flex flex-col justify-center ml-20">
            <h1 className="text-white text-4xl font-bold mb-4">
              Save the Milk
            </h1>
            <p className="text-white text-lg mb-4">
              Japanese milk farm crisis. Low consumption, high price.
            </p>
            <Link href="/project">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                Call to Action
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
