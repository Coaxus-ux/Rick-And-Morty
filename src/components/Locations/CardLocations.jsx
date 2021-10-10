import { useContext } from "react";
import Paginations from "../Utilities/PaginationLocations";
import { CardContainer } from "./CardLocationsStyle";
import { GripTemplate } from "../Characters/CharactersStyle";
import { LocationsContext } from "../../context/LocationsContext";

const CardLocations = () => {
  const { locationsInfo } = useContext(LocationsContext);

  return (
    <>
    <br/><br/>
      <GripTemplate>
        {locationsInfo.map((locations) => (
          <CardContainer key={locations.id}>
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
