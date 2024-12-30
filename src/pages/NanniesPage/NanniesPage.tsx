import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import Header from "../../components/Header/Header";
import NanniesList from "../../components/NanniesList/NanniesList";
import FilterForm from "../../components/FilterForm/FilterForm";
import Loader from "../../components/Loader/Loader";
import { getNannies } from "../../redux/nannies/operations";
import {
  selectNannies,
  selectIsLoading,
  // selectError,
  selectVisibleCount,
} from "../../redux/nannies/selectors";
import { setNanniesPageFilter, resetFilters } from "../../redux/filters/slice";
import { selectNanniesPageFilter } from "../../redux/filters/selectors";
import { selectIsAuthenticated } from "../../redux/auth/selectors";
import { loadMore } from "../../redux/nannies/slice";

import css from "./NanniesPage.module.css";

const NanniesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const selectedFilter = useAppSelector(selectNanniesPageFilter);
  const nannies = useAppSelector(selectNannies);
  const visibleCount = useAppSelector(selectVisibleCount);
  const isLoading = useAppSelector(selectIsLoading);
  // const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getNannies());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(resetFilters());
    }
  }, [isAuthenticated, dispatch]);

  const filteredNannies = [...nannies]
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
    dispatch(setNanniesPageFilter(filter));
  };

  const handleLoadMore = () => {
    dispatch(loadMore(3));
  };

  return (
    <>
      <div className={css.nanniesHeader}>
        <Header />
      </div>
      <main className={css.nanniesContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <FilterForm
              selectedFilters={selectedFilter}
              onFilterChange={handleFilterChange}
            />
            <NanniesList nannies={filteredNannies.slice(0, visibleCount)} />
            {visibleCount < filteredNannies.length && !isLoading && (
              <button className={css.loadBtn} onClick={handleLoadMore}>
                Load More
              </button>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default NanniesPage;
