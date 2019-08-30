import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import axios from "axios";

export default function EpisodeList(props) {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        console.log(response.data.results);
        setEpisode(response.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <div>
        <h1 className="h1">Episodes Page</h1>
        <div className="card">
          {episode.map(episodes => (
            <Card>
              <Card.Content>
                <Card.Header key={episodes.id}>{episodes.name}</Card.Header>
                <Card.Meta>
                  <span>{episodes.air_date}</span>
                  <span>{episodes.episode}</span>
                </Card.Meta>
                <Card.Description>{episodes.url}</Card.Description>
                <Card.Description>{episodes.created}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
