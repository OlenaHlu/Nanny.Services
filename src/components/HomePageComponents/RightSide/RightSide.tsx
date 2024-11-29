import Icon from "../../common/Icon";
import css from "./RightSide.module.css";

const RightSide = () => {
  return (
    <div className={css.rightContainer}>
      <div className={css.nannies}>
        <div className={css.iconContainer}>
          <Icon className={css.icon} iconName="check"></Icon>
        </div>
        <div className={css.description}>
          <h4 className={css.title}>Experienced nannies </h4>
          <p className={css.text}>15,000</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
