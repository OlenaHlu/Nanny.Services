import type { Review } from "../../../redux/nannies/types";
import Icon from "../../common/Icon";

import css from "./ReviewsItems.module.css";

type ReviewsItemsProps = {
  review: Review;
};

const ReviewsItems = ({ review }: ReviewsItemsProps) => {
  const { reviewer, rating, comment } = review;

  return (
    <div>
      <ul className={css.rewievList}>
        <li className={css.imageContainer}>
          <span className={css.initialName}>
            {review.reviewer.split("")[0]}
          </span>
        </li>
        <li>
          <ul className={css.rewierInfo}>
            <li className={css.reviewerName}>{review.reviewer}</li>
            <li className={css.reviewerRating}>
              <Icon className={css.ratingIcon} iconName="star" />{" "}
              {review.rating}
            </li>
          </ul>
        </li>
      </ul>
      <p className={css.text}>{review.comment}</p>
    </div>
  );
};

export default ReviewsItems;
