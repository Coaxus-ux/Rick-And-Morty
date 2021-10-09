import { useContext } from "react";
import { CardContainer, CardBody, GripTemplate } from "./CharactersStyle";
import { AllCharactersContext } from "../../context/AllCharactersContext";
import { UniqueCharactersContext } from "../../context/UniqueCharacter";
import Utilities from "../Utilities/Pagination";
import UniqueCharacter from './UniqueCharacter';
const CardsCharacter = () => {
  const { characters } = useContext(AllCharactersContext);
  const { showUnique } = useContext(UniqueCharactersContext);

  return (
    <>
      {showUnique ? (
        <>
          <GripTemplate>
            {characters.map((character) => (
              <CardContainer key={character.id}>
                <img src={character.image} alt={character.name} />
                <CardBody>
                  <h1>{character.name}</h1>
                  <h3>{character.species}</h3>
                </CardBody>
              </CardContainer>
            ))}
          </GripTemplate>
          <Utilities />
        </>
      ) : <UniqueCharacter/>}
    </>
  );
};

export default CardsCharacter;
