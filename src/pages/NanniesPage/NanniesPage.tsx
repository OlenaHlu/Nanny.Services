import Header from "../../components/Header/Header";
import NanniesList from "../../components/NanniesList/NanniesList";
import FilterForm from "../../components/FilterForm/FilterForm";
import css from "./NanniesPage.module.css";

const NanniesPage: React.FC = () => {
  return (
    <>
      <div className={css.nanniesHeader}>
        <Header />
      </div>
      <main className={css.nanniesContainer}>
        <FilterForm />
        <NanniesList />
      </main>
    </>
  );
};

export default NanniesPage;
