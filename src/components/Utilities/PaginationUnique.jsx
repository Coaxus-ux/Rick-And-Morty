import { useContext } from "react";
import { Previous, Next, ContainerButton } from "./UtilitiesStyle";
import { UniqueCharactersContext } from "../../context/UniqueCharacter";

const PaginationUnique = () => {
  const { pages, setPage, totalPages } = useContext(UniqueCharactersContext);
  const previous = () => {
    const newPage = pages - 1;
    if(newPage === 0) return;
    setPage(newPage);
  };
  const next = () => {
    const newPage = pages + 1;
    if(newPage > totalPages) return;
    setPage(newPage);
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
