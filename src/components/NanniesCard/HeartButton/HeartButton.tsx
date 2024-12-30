import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleFavorite } from "../../../redux/favorites/slice";
import { isNannyFavorite } from "../../../redux/favorites/selectors";
import { selectUser } from "../../../redux/auth/selectors";
import Icon from "../../common/Icon";
import ShowToast from "../../common/ShowToast";

import css from "./HeartButton.module.css";

type HeartButtonProps = {
  nannyId: string;
  isAuthenticated: boolean;
};

const HeartButton: React.FC<HeartButtonProps> = ({
  nannyId,
  isAuthenticated,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const userId = user?.uid || null;

  const isFavorite = useAppSelector(isNannyFavorite(nannyId, userId));

  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAuthenticated || !userId) {
      ShowToast({
        message: "Only for authorized users.",
        type: "error",
      });
      return;
    }

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    dispatch(toggleFavorite({ nannyId, userId }));
  };

  return (
    <button onClick={handleClick} className={css.heartButton}>
      <Icon
        className={`${css.iconHeart} ${
          isFavorite ? css.iconHeartSelected : ""
        } ${isAnimating ? css.iconAnimating : ""}`}
        iconName="heart-normal"
      />
    </button>
  );
};

export default HeartButton;
