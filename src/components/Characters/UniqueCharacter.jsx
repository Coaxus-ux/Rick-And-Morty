import { useContext } from "react";
import { CardContainer, CardBody, GripTemplate } from "./CharactersStyle";
import { UniqueCharactersContext } from "../../context/UniqueCharacter";
import PaginationUnique from "../Utilities/PaginationUnique";

const UniqueCharacter = () => {
  const { setShowUnique, character, nameCharacter, setPage } =
    useContext(UniqueCharactersContext);
  if (nameCharacter === "") {
    setShowUnique(true);
    setPage(1);
  }
  return (
    <>
      <GripTemplate>
        {character.map((character) => (
          <CardContainer key={character.id}>
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
