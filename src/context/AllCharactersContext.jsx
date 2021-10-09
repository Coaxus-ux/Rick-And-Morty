import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AllCharactersContext = createContext();

const AllCharactersProvider = (props) => {
    const [characters, setCharacters] = useState([]);
    const [pages, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        const getCharacters = async () => {
            const url = `https://rickandmortyapi.com/api/character/?page=${pages}`;

            const ResCharacter = await axios.get(url);
            setTotalPages(ResCharacter.data.info.pages);
            setCharacters(ResCharacter.data.results);
        }
        getCharacters();
        const startPage = document.querySelector('#startPage');
        startPage.scrollIntoView({behavior: 'smooth'});
    },[pages])

    return (
        <AllCharactersContext.Provider
            value={{characters, pages, setPage, totalPages}}
        >
            {props.children}
        </AllCharactersContext.Provider>
    )
}
export default AllCharactersProvider