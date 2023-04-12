import React from "react";
import styled from 'styled-components'

function RecipeSearchBar({ searchQuery, setSearchQuery }) {

    return (
        <SearchContainer>
            <SearchInput
                value={searchQuery}
                placeholder="i'm hungry for..."
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </SearchContainer>
    )
}

export default RecipeSearchBar

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

const SearchInput = styled.input`
    width: 400px;
    height: 50px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 50px;
    border: none;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;

    &:focus {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        transform: scale(1.05);
    }

    &::placeholder {
        color: #b0b0b0;
        font-size: 1.1rem;
        text-align: left;
    }
`;
