import { useContext } from "react";
import { useHistory } from "react-router-dom";

/* LLamados Style */
import { CardContainer, CardBody, GripTemplate } from "./CharactersStyle";

/* LLamados Context */
import { UniqueCharactersContext } from "../../context/UniqueCharacter";
import { CharacterInfoContext } from "../../context/CharacterInfoContext";

/* LLamados Components */
import PaginationUnique from "../Utilities/PaginationUnique";

const UniqueCharacter = () => {
  const { setShowUnique, character, nameCharacter, setPage } = useContext(
    UniqueCharactersContext
  );
  const { setCharacterID } = useContext(CharacterInfoContext);

  if (nameCharacter === "") {
    setShowUnique(true);
    setPage(1);
  }

  let history = useHistory();
  return (
    <>
      <GripTemplate>
        {character.map((character) => (
          <CardContainer
            key={character.id}
            onClick={() => {
              setCharacterID(character.id);
              history.push("/character-info");
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
      <PaginationUnique />
    </>
  );
};

export default UniqueCharacter;
