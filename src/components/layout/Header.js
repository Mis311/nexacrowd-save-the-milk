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
          {/* header content */}
          <div className="absolute inset-0 flex flex-col justify-center ml-20 mt-10">
            <p className="text-slate-300 pb-2">Featured Project</p>
            <h1 className="text-white text-6xl font-bold mb-4 font-bold">
              Save the Milk
            </h1>
            <p className="text-white text-lg mb-4 w-1/3">
              Low Consumption, Higher Price...Milk Crisis in Japan: 98% of Dairy Farmers Suffer & Face Potential Bunkrupcy, Amid Gov Subsidies for <span>Killing Milk Cows</span>.
            </p>
            <Link href="/project">
            <button className="transform transition duration-500 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-extrabold py-5 px-5 rounded mt-2 text-2xl hover:bg-blue-600 hover:scale-105">
               Check Offers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
