import { Link } from "react-router-dom";
import Icon from "../../common/Icon";
import css from "./LeftSide.module.css";

const LeftSide = () => {
  return (
    <div className={css.leftContainer}>
      <div className={css.leftContent}>
        <h1 className={css.title}>Make Life Easier for the Family:</h1>
        <p className={css.text}>Find Babysitters Online for All Occasions</p>
        <Link to="/nannies" className={css.link}>
          Get started
          <Icon
            className={`${css.icon} ${css.iconDefault}`}
            iconName="arrow-up"
          />
          <Icon
            className={`${css.icon} ${css.iconHover}`}
            iconName="arrow-left"
          />
        </Link>
      </div>
    </div>
  );
};

export default LeftSide;
