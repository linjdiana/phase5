import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'

function ReviewsContainer({ reviews }) {
    const reviewItems = reviews.map(reviewObj => {
        return <ReviewCard key={reviewObj.id} reviewObj={reviewObj} />;
      });

    return (
        <div className="reviewspage">
            <h1> aloha!
            </h1>
            {reviewItems}
            <ReviewForm />
        </div>
    )
}
export default ReviewsContainer