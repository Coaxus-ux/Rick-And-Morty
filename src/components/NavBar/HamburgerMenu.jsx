import React from 'react'
import { HambuergerMenu, NavLinkMenu } from "./NavStyle";
const HamburgerMenu = () => {
    return ( 
        <HambuergerMenu>
            <NavLinkMenu to="/">Characters</NavLinkMenu>
            <NavLinkMenu to="/locations">Locations</NavLinkMenu>
            <NavLinkMenu to="/episodes">Episodes</NavLinkMenu>
        </HambuergerMenu>
     );
}
 
export default HamburgerMenu;