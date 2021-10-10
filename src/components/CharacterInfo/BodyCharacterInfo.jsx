import { useContext } from "react";
import {
  GoHackIcon,
  Container,
  ImgName,
  Informations
} from "./CharacterInfoStyle";
import { NavLink } from "../NavBar/NavStyle";

import { CharacterInfoContext } from "../../context/CharacterInfoContext";

const BodyCharacterInfo = () => {
  const { characterInfo } = useContext(CharacterInfoContext);
  return (
    <>
      <NavLink to="/">
        <GoHackIcon /> <h1>GO BACK</h1>
      </NavLink>
      <Container>
        <ImgName>
          <img src={characterInfo.image} alt="" />
          <h2>{characterInfo.name}</h2>
        </ImgName>
        <Informations>
          <h1>Specie</h1>
          <p>{characterInfo.species}</p>
          <hr/>
          <h1>Status</h1>
          <p>{characterInfo.status}</p>
          <hr/>
          <h1>Origin</h1>
          <p>{characterInfo.origin.name}</p>
          <hr/>
          <h1>Gender</h1>
          <p>{characterInfo.gender}</p>
          <hr/>
          <h1>Location</h1>
          <p>{characterInfo.location.name}</p>
        </Informations>
      </Container>
    </>
  );
};

export default BodyCharacterInfo;
