import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { Link } from "react-router-dom";
import logo from "../../assets/NannyServices.svg";
import css from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <Link to="/" className={css.logo}>
        <img src={logo} width="164" height="28" />
      </Link>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default Header;
