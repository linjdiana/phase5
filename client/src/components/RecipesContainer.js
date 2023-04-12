import RecipeCard from './RecipeCard'
import styled from 'styled-components';
import RecipeSearchBar from './RecipeSearchBar'
import React, { useState } from 'react'

function RecipesContainer({ recipes }) {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredRecipes = recipes.filter(recipe =>
        recipe?.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
        recipe?.chef?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe?.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const recipeItems = filteredRecipes.map(recipeObj => {
        return <RecipeCard key={recipeObj.id} recipeObj={recipeObj} />;
    });


    return (
        <>
        <RecipeSearchBar setSearchQuery = {setSearchQuery} searchQuery={searchQuery}/>
        {/* <input >
            </input> */}
            <br />
        <Container>
        <div className="recipespage">
            {recipeItems}
        </div>
        </Container>
        </>
    )
}

export default RecipesContainer

const Container = styled.div `
display: flex;
justify-content: center;
align-items: center;

  .recipespage {
    width: 90%;
    display: fl ex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: auto; /* adds horizontal scroll */
    max-height: 80vh;
    // background-image: url("https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/pexels-photo-1131406.webp");
    opacity: 0.9;
    background-repeat: no-repeat;
    background-size: 100%;

  }

  @media screen and (max-width: 767px) {
    .recipespage {
      justify-content: center;
    }
  }
  
  @media screen and (min-width: 768px) {
    .recipespage {
      justify-content: center;
    }
  }
  
  @media screen and (min-width: 992px) {
    .recipespage {
      justify-content: center;
    }
  }`