import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import styled from 'styled-components';

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
  width: 70%;
  height: 250px;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ReviewsForm = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

