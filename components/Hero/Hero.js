import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title">
        <h1>Games with real economies</h1>
        <p>Play, collect & earn with NFT-based competitive games</p>
      </div>
      <div className="bubble wallet">
        <img src="/assets/wallet.png" />
      </div>
      <div className="bubble ethereum">
        <img src="/assets/ethereum.svg" />
      </div>
    </div>
  );
};

export default Hero;
