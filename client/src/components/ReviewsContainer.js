import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'
import React, {useState} from 'react'

function ReviewsContainer({ reviews }) {
  
  const reviewItems = reviews.map(reviewObj => {
    return <ReviewCard key={reviewObj.id} reviewObj={reviewObj} />;
  });

  return (
    <Container>
      <ReviewItems>{reviewItems}</ReviewItems>
      <ReviewsForm>
        <ReviewForm />
      </ReviewsForm>
    </Container>
  );
}

export default ReviewsContainer;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReviewItems = styled.div`

  width: 60%;
  height: 425px;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  // background-image: url("https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/pexels-photo-1131406.webp");
    opacity: 0.9;
    background-repeat: no-repeat;
    background-size: 135%;
`;

const ReviewsForm = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
`;

