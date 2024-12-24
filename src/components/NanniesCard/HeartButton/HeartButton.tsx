import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleFavorite } from "../../../redux/favorites/slice";
import { isNannyFavorite } from "../../../redux/favorites/selectors";
import { selectUser } from "../../../redux/auth/selectors";
import Icon from "../../common/Icon";

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
  // console.log("User ID:", userId);
  // console.log("Nanny ID:", nannyId);

  const isFavorite = useAppSelector(isNannyFavorite(nannyId, userId));

  // console.log("HeartButton nannyId:", nannyId);

  const handleClick = () => {
    if (!isAuthenticated || !userId) {
      alert("This feature is available only for authorized users.");
      return;
    }
    dispatch(toggleFavorite({ nannyId, userId }));
  };

  return (
    <button onClick={handleClick} className={css.heartButton}>
      <Icon
        className={`${css.iconHeart} ${
          isFavorite ? css.iconHeartSelected : ""
        }`}
        iconName="heart-normal"
      />
    </button>
  );
};

export default HeartButton;
