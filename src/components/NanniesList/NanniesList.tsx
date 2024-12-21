import { useSelector } from "react-redux";
import NanniesCard from "../NanniesCard/NanniesCard";
import type { Nannies } from "../../redux/nannies/types";
import { selectIsAuthenticated } from "../../redux/auth/selectors";

import css from "./NanniesList.module.css";

type NanniesListProps = {
  nannies: Nannies;
};

const NanniesList = ({ nannies }: NanniesListProps) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <ul className={css.nanniesList}>
      {nannies.map((nanny) => (
        <li key={nanny.id}>
          <NanniesCard isAuthenticated={isAuthenticated} nanny={nanny} />
        </li>
      ))}
    </ul>
  );
};

export default NanniesList;
