import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuthenticated } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  function getClassActiveLink({ isActive }: { isActive: boolean }) {
    return clsx(css.link, isActive && css.active);
  }

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isHomePage = location.pathname === "/";
  return (
    <nav className={clsx(css.nav, isHomePage && css.homePageNav)}>
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
        {isAuthenticated && (
          <li>
            <NavLink className={getClassActiveLink} to="/favorites">
              Favorites
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
