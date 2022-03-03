import { Grid } from "semantic-ui-react";

const Mission = () => {
  return (
    <section className="mission__section wrapped" id="mission">
      <Grid>
        <Grid.Column tablet={5} computer={4} mobile={16}>
          <div className="mission__title">
            <h2>Our Mission</h2>
            <img src="/assets/mission-logo.png" />
          </div>
        </Grid.Column>
        <Grid.Column tablet={11} computer={12} mobile={16}>
          <div className="mission__content">
            <p>
              We want to create games with built-in economies, where each player
              is rewarded for their skill, until our games become a stable
              source of income, become part of a community that benefits from
              blockchain technology and the play to earn revolution.
            </p>
            <div className="overlay"></div>
          </div>
        </Grid.Column>
      </Grid>
    </section>
  );
};

export default Mission;
