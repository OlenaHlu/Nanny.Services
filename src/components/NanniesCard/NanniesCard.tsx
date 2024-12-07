import type { Nanny } from "../../redux/nannies/types";

import css from "./NanniesCard.module.css";

type NanniesCardProps = {
  nanny: Nanny;
};

const NanniesCard = ({ nanny }: NanniesCardProps) => {
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
      <div>saasd</div>
    </div>
  );
};

export default NanniesCard;
