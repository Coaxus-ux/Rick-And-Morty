import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharacterInfoContext = createContext();

const CharacterInfoProvider = (props) => {
  const [characterInfo, setCharacterInfo] = useState([]);
  const [characterID, setCharacterID] = useState('1');
  useEffect(() => {
    const getCharacters = async () => {
      const url = `https://rickandmortyapi.com/api/character/${characterID}`;
      const ResCharacter = await axios.get(url);
      setCharacterInfo(ResCharacter.data);
    };
    getCharacters();
  }, [characterID]);
    return (
    <CharacterInfoContext.Provider
      value={{characterInfo, setCharacterID}}
    >
      {props.children}
    </CharacterInfoContext.Provider>
  );
}
export default CharacterInfoProvider;