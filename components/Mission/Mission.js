import React from "react";

const Mission = () => {
  return (
    <section className="mission__section wrapped" id="mission">
      <div className="mission__title">
        <h2>Our Mission</h2>
        <img src="/assets/mission-logo.png" />
      </div>
      <div className="mission__content">
        <p>
          We want to create games with built-in economies, where each player is
          rewarded for their skill, until our games become a stable source of
          income, become part of a community that benefits from blockchain
          technology and the play to earn revolution.
        </p>
        <div className="overlay"></div>
      </div>
    </section>
  );
};

export default Mission;
