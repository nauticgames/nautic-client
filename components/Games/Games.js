import { Grid } from "semantic-ui-react";
import Game from "./Game";
import GamesData from "./Games.json";

const Games = () => {
  return (
    <section className="games__section wrapped" id="games">
      <Grid>
        <Grid.Column>
          <h2 className="games__title">Games</h2>
          <hr />
        </Grid.Column>
      </Grid>
      <Grid className="games__grid" centered>
        {GamesData.map((game) => (
          <Grid.Column key={game.id} mobile={16} tablet={6} computer={4}>
            <Game
              description={game.description}
              img={game.img}
              link={game.link}
            />
          </Grid.Column>
        ))}
      </Grid>
    </section>
  );
};

export default Games;
