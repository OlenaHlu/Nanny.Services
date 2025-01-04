import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import { Link } from "react-router-dom";
import logo from "../../assets/NannyServices.svg";
import css from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <Link to="/">
        <img src={logo} className={css.imgHead} />
      </Link>
      <div className={css.interactive}>
        <Navigation />
        <AuthNav />
      </div>
    </header>
  );
};

export default Header;
