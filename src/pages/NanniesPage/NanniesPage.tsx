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
import { nanniesDB } from "../../fetch/firebase";

import css from "./NanniesPage.module.css";

const NanniesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const nannies = useAppSelector(selectNannies);
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectError);

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
        <NanniesList nannies={nannies} />
      </main>
    </>
  );
};

export default NanniesPage;
