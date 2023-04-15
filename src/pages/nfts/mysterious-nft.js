import React from "react";
import ProductPage from "../components/ProductPage";

const MysteriousNFT = {
    title: "?",
    description: "You never know what this NFT is until you buy a product.",
    image: "/nfts/qmark.png",
    width: 300,
    height: 300,
    slug: "/nfts/mysterious-nft",
  };

const MysteryNFTpage = () => {
  return <ProductPage nftData={MysteriousNFT} />;
};

export default MysteryNFTpage;
