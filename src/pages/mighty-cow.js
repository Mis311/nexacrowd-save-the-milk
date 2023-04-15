import React from "react";
import ProductPage from "../components/ProductPage";

const mightyCowNFT = {
  title: "Mighty Cow",
  description: "MoMo Nation Project",
  image: "/nfts/cow1.png",
  width: 300,
  height: 300,
};

const MightyCow = () => {
  return <ProductPage nftData={mightyCowNFT} />;
};

export default MightyCow;
