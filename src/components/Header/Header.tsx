import { Link } from "react-router-dom";
import logo from "../../assets/NannyServices.svg";
import css from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <Link to="/">
        <img src={logo} width="164" height="28" />
      </Link>
    </header>
  );
};

export default Header;
