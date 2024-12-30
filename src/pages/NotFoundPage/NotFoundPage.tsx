import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFound}>
      <p className={css.text}>
        Sorry, page not found! Please go to{" "}
        <Link className={css.link} to="/">
          Home page!
        </Link>
      </p>
      <div className={css.image}></div>
    </div>
  );
};
export default NotFoundPage;
