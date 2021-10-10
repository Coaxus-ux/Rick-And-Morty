import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UniqueCharactersContext = createContext();

const UniqueCharactersProvider = (props) => {
  const [nameCharacter, setNameCharacter] = useState("");
  const [character, setCharacter] = useState([]);
  const [showUnique, setShowUnique] = useState(true);
  const [pages, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const getCharacters = async () => {
      const url = `https://rickandmortyapi.com/api/character/?name=${nameCharacter}&page=${pages}`;

      const ResCharacter = await axios.get(url);
      setTotalPages(ResCharacter.data.info.pages);
      setCharacter(ResCharacter.data.results);
    };
    getCharacters();
    window.scroll({
      top: 100,
      left: 100,
      behavior: "smooth",
    });
  }, [nameCharacter, pages]);
  return (
    <UniqueCharactersContext.Provider
      value={{
        character,
        setNameCharacter,
        setShowUnique,
        showUnique,
        nameCharacter,
        pages,
        setPage,
        totalPages,
      }}
    >
      {props.children}
    </UniqueCharactersContext.Provider>
  );
};
export default UniqueCharactersProvider;
