import { useState } from "react";
import Logo from "../../img/Logo.png";
import { Nav, NavLink, Bars, NavMenu } from "./NavStyle";
import Menu from "./HamburgerMenu";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const onClick = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="logo"></img>
        </NavLink>
        <Bars onClick={onClick} />
        <NavMenu>
          <NavLink to="/">Characters</NavLink>
          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/episodes">Episodes</NavLink>
        </NavMenu>
      </Nav>
      {menu ? <Menu /> : null}
      
    </>
  );
};

export default Navbar;
