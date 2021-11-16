import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

const Game = ({ img, description }) => {
  return (
    <div className="games__card">
      <img src={img} />
      <h3>{description}</h3>
      <div className="visit__btn">
        <p>Visit</p>
        <Icon path={mdiArrowRight} size={1} color="#505050" />
      </div>
    </div>
  );
};

export default Game;
