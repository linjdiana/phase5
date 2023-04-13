import WheelComponent from "react-wheel-of-prizes";
import styled from 'styled-components'

function WheelOfFortune({ recipes }) {
  const getRandomRecipes = () => {
    const selectedRecipes = [];
    const numRecipes = recipes.length;
    while (selectedRecipes.length < 5) {
        const randomIndex = Math.floor(Math.random() * numRecipes);
        const randomRecipe = recipes[randomIndex];
        if (!selectedRecipes.includes(randomRecipe)) {
            selectedRecipes.push(randomRecipe);
        }
    }
    return selectedRecipes;
};
  const segments = getRandomRecipes().map(recipe => `${recipe.name} with ${recipe.chef.name}`);
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];

  // Generate segments array based on recipe data
  recipes.forEach(recipe => {
    segments.push(`${recipe.name} with ${recipe.chef.name}`);
  });

  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <Wheel>
      <h1>Don't know who to pick?</h1>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={400}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
    </Wheel>
  );
}

export default WheelOfFortune

const Wheel = styled.div `
`