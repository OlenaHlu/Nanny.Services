import ReviewsItems from "../ReviewsItems/ReviewsItems";
import type { Nanny } from "../../../redux/nannies/types";

type ReviewsItemsProps = Pick<Nanny, "reviews">;

const ReviewsList = ({ reviews }: ReviewsItemsProps) => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          <ReviewsItems review={review} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
