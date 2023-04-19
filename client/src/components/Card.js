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
