import React from "react";
import ProductPage from "../components/ProductPage";

const MysteryNFT = {
  title: "?",
  description: "You never know what this NFT is until you buy a product.",
  image: "/nfts/qmark.png",
  width: 300,
  height: 300,
};

const MysteryNFTpage = () => {
  return <ProductPage nftData={happyCowNFT} />;
};

export default MysteryNFTpage;
