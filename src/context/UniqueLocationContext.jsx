import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UniqueLocationContext = createContext();

const UniqueLocationProvider = (props) => {
  const [locationInfo, setLocationInfo] = useState([]);
  const [charactersIds, setCharactersIds] = useState([]);
  const [lengthCharacters, setLengthCharacters] = useState(0);
  useEffect(() => {
    const getCharacters = async () => {
    const idToString = charactersIds.toString()
      const url = `https://rickandmortyapi.com/api/character/${idToString}`;
      const ResCharacter = await axios.get(url);
      
      setLocationInfo(ResCharacter.data);
    };
    getCharacters();
  }, [charactersIds]);
    return (
    <UniqueLocationContext.Provider
      value={{ locationInfo, setCharactersIds, lengthCharacters, setLengthCharacters }}
    >
      {props.children}
    </UniqueLocationContext.Provider>
  );
}
export default UniqueLocationProvider;