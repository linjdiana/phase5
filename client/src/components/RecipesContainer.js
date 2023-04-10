import RecipeCard from './RecipeCard'
import styled from 'styled-components';
import RecipeSearchBar from './RecipeSearchBar'

function RecipesContainer({ recipes }) {
    const recipeItems = recipes.map(recipeObj => {
        return <RecipeCard key={recipeObj.id} recipeObj={recipeObj} />;
    });

    return (
        <>
        <RecipeSearchBar />
        {/* <input >
            </input> */}
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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