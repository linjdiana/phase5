import RecipeCard from './RecipeCard'

function RecipesContainer({ recipes }) {
    const recipeItems = recipes.map(recipeObj => {
        return <RecipeCard key={recipeObj.id} recipeObj={recipeObj} />;
    });

    return (
        <div className="recipespage">
            {recipeItems}
        </div>
    )
}

export default RecipesContainer