import RecipeCard from './RecipeCard'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipesContainer({ recipes }) {
  const [{ data: recipe, error, status }, setRecipe] = useState({
    data: null,
    error: null,
    status: "pending",
  });
  const { id } = useParams();

  const recipeItems = recipes.map(recipeObj => {
    return <RecipeCard key={recipeObj.id} recipeObj={recipeObj} />;
  });

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`/recipes_by_chef/${id}`, { signal: abortController.signal }).then((r) => {
      if (r.ok) {
        r.json().then((recipe) =>
          setRecipe({ data: recipe, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setRecipe({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <div className="recipespage">
      {recipeItems}
      {recipe ? (
        <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
        </li>
      ) : null}
    </div>
  );
}

export default RecipesContainer;
