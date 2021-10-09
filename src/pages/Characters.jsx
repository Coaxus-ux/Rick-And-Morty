import React from 'react';
import Navbar from '../components/NavBar/Navbar'
import Header from '../components/Characters/Header'
import CardsCharacter from '../components/Characters/CardsCharacter';

const Characters = () => {
    return ( 
        <>
        <Navbar/>
        <Header/>
        <CardsCharacter/>
        </>
     );
}
 
export default Characters;