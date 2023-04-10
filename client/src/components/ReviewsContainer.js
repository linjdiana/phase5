import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'

function ReviewsContainer({ reviews }) {
    const reviewItems = reviews.map(reviewObj => {
        return <ReviewCard key={reviewObj.id} reviewObj={reviewObj} />;
      });


    return (
        <div>
        {reviewItems}
        <h1>HIII</h1>
        </div>
    );
}
export default ReviewsContainer