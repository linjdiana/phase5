import RecipeCard from './RecipeCard'
import { useState, useEffect } from "react";

function RecipesContainer() {
    const [chefRecipes, setChefRecipes] = useState([])
    return (
        <div className="recipespage">
            {/* <RecipeCard /> */}
        </div>
    )
}

export default RecipesContainer