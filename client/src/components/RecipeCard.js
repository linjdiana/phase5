import { useState } from 'react';
import styled from 'styled-components';

function RecipeCard({ recipeObj }) {
    const { id, title, image, description, chef } = recipeObj
    // const [ showRecipe, setShowRecipe] = useState(false)
    // function handleClick() {
    //     setShowRecipe((currentImage) => !currentImage)
    // }

    // const bioText = showRecipe ? <p>{recipe}</p> : null;
    // const buttonText = showRecipe? "Hide Recipe" : "Show Recipe"

    return (
        <Card>
        <div className="content">
            <div className="front">
                
                <img src={image} alt={title}/>
            </div>
                <div class="back">
                <h2><strong>{title}</strong></h2>
                <p>{description}</p>
                <p>{chef?.name}</p>
                </div>
            </div>
        </Card>
    )
}

export default RecipeCard

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 0 10px 20px;
  perspective: 1000px;
  

  .content {
    position: absolute;
    width: 250px;
    height: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    transition: transform 0.5s;
    margin: 0 auto;
  }

  &:hover .content {
    transform: rotateX(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 5px;
  }

  .front {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: #03446a;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }

  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #03446a;
    color: #fff;
    transform: rotateY(180deg) rotate(180deg);
    p {
      font-size: 1.5rem;
      text-align: center;
      line-height: 1.5;
      padding: 0 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(50% - 20px);
  }

  @media screen and (min-width: 992px) {
    width: calc(33.333% - 20px);
  }
`;


