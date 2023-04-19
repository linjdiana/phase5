import styled from 'styled-components';
import React from "react";
import classnames from "classnames";
import burger from "/Users/linjdiana/Desktop/flatiron/phase5/client/src/images/burger.jpeg";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={burger} alt="burger" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="burger" />
      </div>
    </div>

  );
};

export default Card;

// const GameCard = styled.div `
// width: 100%;
// height: 100%;
// border-radius: 4px;
// box-shadow: 2px 2px 4px 4px #DEDEDE;
// transition: 0.3s;
// transform-style: preserve-3d;
// position: relative;
// cursor: pointer;

// img {
//     width: 95%;
//     height: 95%;
//   }
  
//   .card-face {
//     backface-visibility: hidden;
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     &.card-back-face {
//       transform: rotateY(180deg);
//     }
//   }

//   &.is-flipped {
//     transform: rotateY(180deg);
//   }

//   &.is-inactive {
//     // visibility: hidden;
//     opacity: 0;
//   }`