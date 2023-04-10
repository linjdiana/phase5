import { useState } from 'react';
import styled from 'styled-components';

function ReviewCard({ reviewObj }) {
    const { id, user, rating, text } = reviewObj

    return (
        <Card >
        <ul class="content">
            <ul class="author"><strong>{user}</strong></ul>
            <p>{rating}</p>
            <p>{text}</p>
            <br></br>
          </ul>
        </Card>
    )
}

export default ReviewCard


const Card = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 0 10px 20px;
  perspective: 1000px;
  

  .content {
    position: absolute;
    width: 1000px;
    height: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    transition: transform 0.5s;
    margin: 0 auto;


  @media screen and (min-width: 768px) {
    width: calc(50% - 20px);
  }

  @media screen and (min-width: 992px) {
    width: calc(33.333% - 20px);
  }
`;


