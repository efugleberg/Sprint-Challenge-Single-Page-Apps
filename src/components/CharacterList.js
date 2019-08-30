import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterList(props) {
  const [track, setTrack] = useState([]);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setTrack(response.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <div>
        <h1 className="h1">Characters Page</h1>
        <div className="card">
          {track.map(characters => (
            <Card key={characters.id}>
              <Image src={characters.image}></Image>
              <Card.Content>
                <Card.Header >{characters.name}</Card.Header>
                <Card.Meta>
                  <span>{characters.gender}</span>
                  <span>{characters.species}</span>
                </Card.Meta>
                <Card.Description>{characters.created}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
