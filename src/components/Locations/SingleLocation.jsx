import { useContext } from "react";
import { useHistory } from "react-router-dom";

import { NavLink } from "../NavBar/NavStyle";
import { GoHackIcon } from "../CharacterInfo/CharacterInfoStyle";
import NobodyLivesHere from "../../img/NobodyLivesHere.png";
import { Nobody } from "./CardLocationsStyle";
import {
  CardContainer,
  CardBody,
  GripTemplate,
} from "../Characters/CharactersStyle";

import { UniqueLocationContext } from "../../context/UniqueLocationContext";
import { CharacterInfoContext } from "../../context/CharacterInfoContext";

const SinglePlanet = () => {
  const { locationInfo, lengthCharacters, setLengthCharacters } = useContext(UniqueLocationContext);
  const { setCharacterID } = useContext(CharacterInfoContext);
  let numberOfCharacters = locationInfo.length;
  let history = useHistory();
  return (
    <>
      <NavLink to="/locations">
        <GoHackIcon /> <h1>GO BACK</h1>
      </NavLink>
      <GripTemplate>
        {numberOfCharacters > 1 ? (
          locationInfo.map((character) => (
            <CardContainer
              key={character.id}
              onClick={() => {
                setCharacterID(character.id);
                setLengthCharacters(0);
                history.push("/character-info");
              }}
            >
              <img src={character.image} alt={character.name} />
              <CardBody>
                <h1>{character.name}</h1>
                <h3>{character.species}</h3>
              </CardBody>
            </CardContainer>
          ))
        ) : lengthCharacters === 1 ? (
          <CardContainer
            key={locationInfo.id}
            onClick={() => {
              setCharacterID(locationInfo.id);
              history.push("/character-info");
            }}
          >
            <img src={locationInfo.image} alt={locationInfo.name} />
            <CardBody>
              <h1>{locationInfo.name}</h1>
              <h3>{locationInfo.species}</h3>
            </CardBody>
          </CardContainer>
        ) : (
          <Nobody>
            <img src={NobodyLivesHere} alt="NobodyLivesHereImg" />
            <h1>Nobody Lives Here, sorry</h1>
          </Nobody>
        )}
      </GripTemplate>
    </>
  );
};

export default SinglePlanet;
