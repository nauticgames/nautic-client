import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "semantic-ui-react";

const Game = ({ img, description, link }) => {
  return (
    <Card className="game__card">
      <img src={img} />
      <h3>{description}</h3>
      <div className="visit__btn">
        <Link href={link} passHref>
          <a target="_blank">Visit</a>
        </Link>
        <Icon path={mdiArrowRight} size={1} color="#6e6e6e" />
      </div>
    </Card>
  );
};

export default Game;
