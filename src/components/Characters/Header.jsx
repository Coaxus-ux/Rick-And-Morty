import { useContext } from "react";
import ImageRick from "../../img/Name.png";
import { Img, Search, Form } from "./CharactersStyle";
import { UniqueCharactersContext } from "../../context/UniqueCharacter";
const Header = () => {
  const { nameCharacter, setNameCharacter, setShowUnique } = useContext(
    UniqueCharactersContext
  );
  const saveQuery = (e) => {
    setNameCharacter(e.target.value);
    if (nameCharacter !== "") {
      setShowUnique(false);
    }
  };
  return (
    <>
      <Img id="startPage" src={ImageRick} alt="Image name of serie" />
      <Form
      >
        <Search
          name="nameCharacter"
          type="text"
          placeholder="Filter by name..."
          onChange={saveQuery}
        />
      </Form>
    </>
  );
};
export default Header;
