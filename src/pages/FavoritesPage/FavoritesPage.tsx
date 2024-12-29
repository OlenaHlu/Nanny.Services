import Header from "../../components/Header/Header";
import FilterForm from "../../components/FilterForm/FilterForm";
import NanniesList from "../../components/NanniesList/NanniesList";
import { setFavoritesPageFilter } from "../../redux/filters/slice";
import { selectFavoritesPageFilter } from "../../redux/filters/selectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectFavoritesByUser } from "../../redux/favorites/selectors";
import { selectNannies } from "../../redux/nannies/selectors";
import { selectUser } from "../../redux/auth/selectors";

import css from "./FavoritesPage.module.css";

const FavoritesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector(selectFavoritesPageFilter);
  const user = useAppSelector(selectUser);
  const nannies = useAppSelector(selectNannies);
  const favoritesIds = useAppSelector(selectFavoritesByUser(user?.uid || null));
  const favoritesNannies = nannies.filter((nanny) =>
    favoritesIds.includes(nanny.id)
  );

  const filteredNannies = [...favoritesNannies]
    .sort((a, b) => {
      if (selectedFilter === "A to Z") {
        return a.name.localeCompare(b.name);
      }
      if (selectedFilter === "Z to A") {
        return b.name.localeCompare(a.name);
      }

      const averageRatingA = a.reviews.length
        ? a.reviews.reduce((sum, review) => sum + review.rating, 0) /
          a.reviews.length
        : 0;
      const averageRatingB = b.reviews.length
        ? b.reviews.reduce((sum, review) => sum + review.rating, 0) /
          b.reviews.length
        : 0;
      if (selectedFilter === "Popular") {
        return averageRatingB - averageRatingA;
      }

      if (selectedFilter === "Not popular") {
        return averageRatingA - averageRatingB;
      }

      return 0;
    })
    .filter((nanny) => {
      if (selectedFilter === "Less than 17$") {
        return nanny.price_per_hour <= 17;
      }
      if (selectedFilter === "Greater than 17$") {
        return nanny.price_per_hour > 17;
      }

      return true;
    });

  const handleFilterChange = (filter: string) => {
    dispatch(setFavoritesPageFilter(filter));
  };

  return (
    <>
      <div className={css.favoriteHeader}>
        <Header />
      </div>
      <main className={css.favoriteMain}>
        <FilterForm
          selectedFilters={selectedFilter}
          onFilterChange={handleFilterChange}
        />
        {favoritesIds.length > 0 ? (
          <NanniesList nannies={filteredNannies} />
        ) : (
          <p>You have no favorites yet!</p>
        )}
      </main>
    </>
  );
};

export default FavoritesPage;
