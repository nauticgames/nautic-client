import React from "react";
import Game from "./Game";

const Games = () => {
  return (
    <section className="games__section" id="games">
      <div className="games__title wrapped">
        <h2>Games</h2>
        <hr />
      </div>
      <div className="games__container wrapped">
        <Game
          img="/assets/ox-game.png"
          description="Compete against other players in a soccer game and collect rewards in crypto"
        />
      </div>
    </section>
  );
};

export default Games;
