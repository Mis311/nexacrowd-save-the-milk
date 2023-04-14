import React, { useState } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import Link from "next/link";
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
    <nav>
      <div className="fixed top-0 left-0 w-full bg-transparent z-10">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/" className="text-white font-bold text-xl">
            Logo
          </a>
          <ul className="hidden sm:flex space-x-8">
            <li>
              <Link href="#about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
