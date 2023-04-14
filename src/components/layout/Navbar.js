import React, { useState } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

const Navbar = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        const accounts = await provider.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Please install MetaMask to use this feature.");
    }
  };

  return (
    <nav className="bg-white shadow-md py-4 px-12">
      <div className="flex justify-between items-center flex">
        <div className="text-xl font-bold text-gray-800 grid">Save the Milk <span className="text-s font-thin flex flex-col">by NexaCrowd</span></div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-bold">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-bold">
            Projects
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-bold">
            About
          </a>
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
            Create Project
          </button>
          <button
            onClick={connectWallet}
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
          >
            {account ? "Connected" : "Connect Wallet"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
