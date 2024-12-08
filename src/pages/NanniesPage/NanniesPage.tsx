import Header from "../../components/Header/Header";
import NanniesList from "../../components/NanniesList/NanniesList";
import FilterForm from "../../components/FilterForm/FilterForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getNannies } from "../../redux/nannies/operations";
import {
  selectNannies,
  selectIsLoading,
  selectError,
} from "../../redux/nannies/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { nanniesDB } from "../../fetch/firebase";

import css from "./NanniesPage.module.css";

const NanniesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const nannies = useAppSelector(selectNannies);
  const filters = useAppSelector(selectFilters);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

  const filteredNannies = [...nannies]
    .sort((a, b) => {
      if (filters === "A to Z") {
        return a.name.localeCompare(b.name);
      }
      if (filters === "Z to A") {
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
      if (filters === "Popular") {
        return averageRatingB - averageRatingA;
      }

      if (filters === "Not popular") {
        return averageRatingA - averageRatingB;
      }

      return 0;
    })
    .filter((nanny) => {
      if (filters === "Less than 17$") {
        return nanny.price_per_hour < 17;
      }
      if (filters === "Greater than 17$") {
        return nanny.price_per_hour >= 17;
      }

      return true;
    });

  useEffect(() => {
    dispatch(getNannies());
  }, [dispatch]);

  return (
    <>
      <div className={css.nanniesHeader}>
        <Header />
      </div>
      <main className={css.nanniesContainer}>
        <FilterForm />
        <NanniesList nannies={filteredNannies} />
      </main>
    </>
  );
};

export default NanniesPage;
