import { NavLink } from "react-router-dom";
import Icon from "../common/Icon";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/nannies"
          >
            Nannies
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, isActive && css.active)
            }
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
