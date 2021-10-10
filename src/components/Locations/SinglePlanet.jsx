import React from 'react';
import { NavLink } from "../NavBar/NavStyle";
import { GoHackIcon } from "../CharacterInfo/CharacterInfoStyle";
const SinglePlanet = () => {
    return ( 
        <>
        <NavLink to="/locations">
            <GoHackIcon /> <h1>GO BACK</h1>
        </NavLink>
        </>
     );
}
 
export default SinglePlanet;