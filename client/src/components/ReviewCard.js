import { useState } from 'react';
import styled from 'styled-components';

function ReviewCard({ reviewObj }) {
    const { id, user, rating, text } = reviewObj
    
    return (
      <div className="content">
          <li><strong>{user}</strong></li>
          <li>{rating}</li>
          <li>{text}</li>
        <h1>heLLOOO??</h1>
      </div>
    );
}


export default ReviewCard

// const Card = styled.div`
//   position: relative;
//   width: 100%;
//   height: 250px;
//   margin: 0 10px 20px;
//   perspective: 1000px;
  

//   .content {
//     position: absolute;
//     width: 1000px;
//     height: 100%;
//     box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
//     transform-style: preserve-3d;
//     transition: transform 0.5s;
//     margin: 0 auto;
//   }

//   &:hover .content {
//     transform: rotateX(180deg);
//   }

//   .front,
//   .back {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     backface-visibility: hidden;
//     border-radius: 5px;
//   }

//   .front {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #fff;
//     h2 {
//       font-size: 2.5rem;
//       font-weight: bold;
//       color: #03446a;
//       text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     }
//   }

//   @media screen and (min-width: 768px) {
//     width: calc(50% - 20px);
//   }

//   @media screen and (min-width: 992px) {
//     width: calc(33.333% - 20px);
//   }
// `;


