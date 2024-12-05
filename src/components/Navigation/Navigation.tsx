import { NavLink } from "react-router-dom";
import Icon from "../common/Icon";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  function getClassActiveLink({ isActive }: { isActive: boolean }) {
    return clsx(css.link, isActive && css.active);
  }

  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink className={getClassActiveLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassActiveLink} to="/nannies">
            Nannies
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className={getClassActiveLink}
            to="/favorites"
          >
            Favorites
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
