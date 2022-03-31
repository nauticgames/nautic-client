import { Card, Grid } from "semantic-ui-react";
import Data from "./Data";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Team = () => {
  return (
    <section className="team__section wrapped" id="team">
      <Grid>
        <Grid.Column>
          <h2 className="section__title">Team</h2>
        </Grid.Column>
      </Grid>
      <Grid textAlign="center" className="team__grid">
        {Data.map((item, index) => (
          <Grid.Column
            key={index}
            tablet={8}
            mobile={16}
            computer={4}
            stretched
          >
            <Card>
              <div className="card__image">
                <Image
                  src={item.thumb}
                  alt={`${item.name} Thumbnail`}
                  width={1920}
                  height={1080}
                  quality={100}
                  objectFit="cover"
                  priority
                />
              </div>
              <h2 className="team-card__name">{item.name}</h2>
              <p className="team-card__position">{item.position}</p>
              <div className="team-card__social">
                {item.social.map((data, index) => (
                  <Link href={data.link} key={index}>
                    <a target="_blank">
                      <Icon icon={data.icon} color="#0a66c2" />
                    </a>
                  </Link>
                ))}
              </div>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </section>
  );
};

export default Team;
