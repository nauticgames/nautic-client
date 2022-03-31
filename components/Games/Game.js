import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import Link from "next/link";
import { Card } from "semantic-ui-react";
import Image from "next/image";

const Game = ({ game }) => {
  const { link, title, description, img } = game;

  return (
    <Card className="game__card">
      <Link href={link} passHref>
        <a as="a" target="_blank">
          <div className="card__image">
            <Image
              src={img}
              alt={`${title} Image`}
              layout="fill"
              // width={300}
              // height={200}
              objectFit="contain"
              quality={100}
              priority
            />
          </div>
          <h3>{description}</h3>
          <div className="visit__btn">
            <a>Visit</a>
            <Icon path={mdiArrowRight} size={1} color="#6e6e6e" />
          </div>
        </a>
      </Link>
    </Card>
  );
};

export default Game;
