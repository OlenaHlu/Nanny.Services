import css from "./ReviewsItems.module.css";
import type { Review } from "../../../redux/nannies/types";

type ReviewsItemsProps = {
  review: Review;
};

const ReviewsItems = ({ review }: ReviewsItemsProps) => {
  const { reviewer, rating, comment } = review;

  return (
    <div>
      <ul>
        <li>
          <span>{review.reviewer.split("")[0]}</span>
        </li>
        <li>
          <ul>
            <li>{review.reviewer}</li>
            <li>{review.rating}</li>
          </ul>
        </li>
      </ul>
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewsItems;
