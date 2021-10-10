import { useContext } from "react";
import { useHistory } from "react-router-dom";

import Paginations from "../Utilities/PaginationLocations";

import { CardContainer } from "./CardLocationsStyle";
import { GripTemplate } from "../Characters/CharactersStyle";

import { LocationsContext } from "../../context/LocationsContext";
import { UniqueLocationContext } from "../../context/UniqueLocationContext";
const CardLocations = () => {
  const { locationsInfo } = useContext(LocationsContext);
  const { setCharactersIds, setLengthCharacters } = useContext(UniqueLocationContext);

  let history = useHistory();

  const regex = /(\d+)/g;

  return (
    <>
      <br />
      <br />
      <GripTemplate>
        {locationsInfo.map((locations) => (
          <CardContainer
            key={locations.id}
            onClick={() => {

              const ids = [];
              const residents = locations.residents;
              
              residents.forEach((r) => {
                ids.push(r.match(regex));
              });
              setLengthCharacters(ids.length);
              setCharactersIds(ids);
              history.push("/locations-residents");


            }}
          >
            <h1>{locations.name}</h1>
            <p>{locations.type}</p>
          </CardContainer>
        ))}
      </GripTemplate>

      <Paginations />
    </>
  );
};

export default CardLocations;
