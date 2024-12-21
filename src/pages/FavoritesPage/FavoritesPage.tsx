import Header from "../../components/Header/Header";
import css from "./FavoritesPage.module.css";

const FavoritesPage: React.FC = () => {
  return (
    <>
      <div className={css.favoriteHeader}>
        <Header />
      </div>
    </>
  );
};

export default FavoritesPage;
