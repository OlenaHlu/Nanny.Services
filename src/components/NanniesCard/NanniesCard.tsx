import type { Nanny } from "../../redux/nannies/types";
import ReviewsList from "./ReviewsList/ReviewsList";
import { useCallback, useState } from "react";

import css from "./NanniesCard.module.css";

type NanniesCardProps = {
  nanny: Nanny;
};

const NanniesCard = ({ nanny }: NanniesCardProps) => {
  const [isOpenMore, setIsOpenMore] = useState(false);

  const toggleBtnMore = useCallback(() => {
    setIsOpenMore(!isOpenMore);
  }, [isOpenMore]);

  const {
    id,
    name,
    avatar_url,
    birthday,
    experience,
    reviews,
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating,
  } = nanny;

  return (
    <div className={css.cardContainer}>
      <div>
        <img src={nanny.avatar_url} alt="" />
      </div>
      <div>
        <div>
          <p>nanny</p>
          <div>
            <ul>
              <li>{nanny.location}</li>
              <li>{nanny.rating}</li>
              <li>Price / 1 hour: {nanny.price_per_hour}$</li>
            </ul>
          </div>
          <button>*heart*</button>
        </div>
        <h3>{nanny.name}</h3>
        <div>
          <div>
            <ul>
              <li>Age: {nanny.birthday}</li>
              <li>Experience: {nanny.experience}</li>
              <li>Kids Age: {nanny.kids_age}</li>
              <li>
                Characters:
                <ul>
                  {nanny.characters.map((char, index) => (
                    <li key={index}>{char}</li>
                  ))}
                </ul>
              </li>
              <li>Education: {nanny.education}</li>
            </ul>
          </div>
          <p>{nanny.about}</p>
        </div>
        {!isOpenMore && <button onClick={toggleBtnMore}>Read more</button>}
        {isOpenMore && (
          <div>
            <ReviewsList reviews={reviews} />
            <button>Make an appointment</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NanniesCard;
