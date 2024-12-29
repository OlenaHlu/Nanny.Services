import { useCallback, useState } from "react";

import type { Nanny } from "../../redux/nannies/types";
import ReviewsList from "./ReviewsList/ReviewsList";
import Icon from "../common/Icon";
import OrderModal from "../OrderModal/OrderModal";
import HeartButton from "./HeartButton/HeartButton";

import css from "./NanniesCard.module.css";

type NanniesCardProps = {
  nanny: Nanny;
  isAuthenticated: boolean;
};

const NanniesCard = ({ nanny, isAuthenticated }: NanniesCardProps) => {
  const [isOpenMore, setIsOpenMore] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openOrderModal = () => {
    setIsModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsModalOpen(false);
  };

  const toggleBtnMore = useCallback(() => {
    setIsOpenMore(!isOpenMore);
  }, [isOpenMore]);

  const {
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

  const calculateAge = (birthDate: string): number => {
    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className={css.cardContainer}>
      <div className={css.imgContainer}>
        <div className={css.avatar}>
          <img className={css.img} src={nanny.avatar_url} alt="nanny" />
          <span className={css.status}></span>
        </div>
      </div>
      <div className={css.mainInfo}>
        <div className={css.headerCard}>
          <p className={css.text}>nanny</p>
          <div className={css.listContainer}>
            <ul className={css.listHeader}>
              <li className={css.listItem}>
                <Icon className={css.iconMap} iconName="map-pin" />
                {nanny.location}{" "}
              </li>
              <span className={css.stick}>|</span>
              <li className={css.listItem}>
                <Icon className={css.iconStar} iconName="star" />
                {nanny.rating}
              </li>
              <span className={css.stick}> |</span>
              <li className={css.listItem}>
                Price / 1 hour:{" "}
                <span className={css.price}>{nanny.price_per_hour}$</span>
              </li>
            </ul>
            <HeartButton nannyId={nanny.id} isAuthenticated={isAuthenticated} />
          </div>
        </div>
        <h3 className={css.name}>{nanny.name}</h3>
        <div>
          <ul className={css.nannyInfoList}>
            <li className={css.nannyInfoItem}>
              Age:{" "}
              <span className={css.info}>{calculateAge(nanny.birthday)}</span>
            </li>
            <li className={css.nannyInfoItem}>
              Experience: <span className={css.info}>{nanny.experience}</span>
            </li>
            <li className={css.nannyInfoItem}>
              Kids Age: <span className={css.info}>{nanny.kids_age}</span>
            </li>
            <li className={css.nannyInfoItem}>
              Characters:
              <ul className={css.charactersList}>
                {nanny.characters.map((char, index) => (
                  <li key={index}>{char},</li>
                ))}
              </ul>
            </li>
            <li className={css.nannyInfoItem}>
              Education: <span className={css.info}>{nanny.education}</span>
            </li>
          </ul>
        </div>
        <p className={css.nunnyAbout}>{nanny.about}</p>

        {!isOpenMore && (
          <button className={css.readMore} onClick={toggleBtnMore}>
            Read more
          </button>
        )}
        {isOpenMore && (
          <>
            <div className={css.reviewsContainer}>
              <ReviewsList reviews={reviews} />
            </div>
            <button className={css.orderBtn} onClick={openOrderModal}>
              Make an appointment
            </button>
            {isModalOpen && (
              <OrderModal
                name={nanny.name}
                image={nanny.avatar_url}
                closeModal={closeOrderModal}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NanniesCard;
