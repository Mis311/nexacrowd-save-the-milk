import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          Web3 Crowdfunding
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
