import { useContext } from "react";
import { useHistory } from "react-router-dom";

/* LLamados Context */
import { CardContainer, CardBody, GripTemplate } from "./CharactersStyle";
import { AllCharactersContext } from "../../context/AllCharactersContext";
import { UniqueCharactersContext } from "../../context/UniqueCharacter";
import { CharacterInfoContext } from "../../context/CharacterInfoContext";

/* LLamados Components */
import Utilities from "../Utilities/Pagination";
import UniqueCharacter from "./UniqueCharacter";


const CardsCharacter = () => {
  const { characters } = useContext(AllCharactersContext);
  const { showUnique } = useContext(UniqueCharactersContext);
  const { setCharacterID } = useContext(CharacterInfoContext);
  
  let history = useHistory();
  return (
    <>
      {showUnique ? (
        <>
          <GripTemplate>
            {characters.map((character) => (
              <CardContainer
                key={character.id}
                onClick={() => {
                  setCharacterID(character.id);
                  history.push("/character-info")
                }}
              >
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
      ) : (
        <UniqueCharacter />
      )}
    </>
  );
};

export default CardsCharacter;
