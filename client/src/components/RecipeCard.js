import { useState } from 'react';
import styled from 'styled-components';

function RecipeCard({ recipeObj }) {
  const { id, title, image, description, chef } = recipeObj;

  return (
    <Card>
      <div className="content">
        <div className="front">
          <div className="image-container">
            <img src={image} alt={title} />
            <h2>{title}</h2>
          </div>
        </div>
        <div class="back">
          <p>{description}</p>
          {/* <p>{chef?.name}</p> */}
        </div>
      </div>
    </Card>
  );
}

export default RecipeCard;

const Card = styled.div`
  position: relative;
  height: 250px;
  margin: 10px 15px;
  margin-bottom: 10px;
  opacity: 0.9;
  border-radius: 25%;

  .content {
    position: absolute;
    width: 220px;
    height: 220px;
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
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    object-fit: cover;

    img {
      // min-width: 90%;
      max-width: 90%;
      max-height: 180px;
      object-fit: cover;
    }

    h2 {
      font-size: 20px;
      color: #03446a;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-top: 10px;
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
      font-size: 10px;
      text-align: center;
      line-height: 1;
      padding: 0 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(25% - 20px);
  }

  @media screen and (min-width: 992px) {
    width: calc(25% - 20px);
  }
`;
