import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LocationsContext = createContext();

const LocationsProvider = (props) => {
  const [locationsInfo, setLocationsInfo] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const getCharacters = async () => {
      const url = `https://rickandmortyapi.com/api/location?page=${pages}`;
      const ResCharacter = await axios.get(url);
      setTotalPages(ResCharacter.data.info.pages);
      setLocationsInfo(ResCharacter.data.results);
    };
    getCharacters();
  }, [pages]);
    return (
    <LocationsContext.Provider
      value={{ locationsInfo, totalPages, pages, setPages }}
    >
      {props.children}
    </LocationsContext.Provider>
  );
}
export default LocationsProvider;