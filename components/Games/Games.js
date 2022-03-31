import { Grid } from "semantic-ui-react";
import Game from "./Game";
import Data from "./Data";

const Games = () => {
  return (
    <section className="games__section wrapped" id="games">
      <Grid>
        <Grid.Column>
          <h2 className="section__title">Games</h2>
        </Grid.Column>
      </Grid>
      <Grid className="games__grid" centered>
        {Data.map((game, index) => (
          <Grid.Column key={index} mobile={16} tablet={6} computer={4}>
            <Game game={game} />
          </Grid.Column>
        ))}
      </Grid>
    </section>
  );
};

export default Games;
