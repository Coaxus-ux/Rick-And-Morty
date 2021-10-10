import { useContext } from "react";
import { Previous, Next, ContainerButton } from "./UtilitiesStyle";
import { LocationsContext } from "../../context/LocationsContext";

const PaginationUnique = () => {
  const { totalPages, pages, setPages } = useContext(LocationsContext);
  const previous = () => {
    const newPage = pages - 1;
    if(newPage === 0) return;
    setPages(newPage);
  };
  const next = () => {
    const newPage = pages + 1;
    if(newPage > totalPages) return;
    setPages(newPage);
  };
  return (
    <ContainerButton>
        {(pages === 1) ? null: <Previous onClick={previous}>Previous </Previous>}
        {pages} of {totalPages}
        {(pages === totalPages) ? null: <Next onClick={next}>Next</Next>}
      
    </ContainerButton>
  );
};

export default PaginationUnique;