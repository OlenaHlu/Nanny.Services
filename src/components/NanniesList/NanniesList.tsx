import { useAppSelector } from "../../redux/hooks";
import NanniesCard from "../NanniesCard/NanniesCard";
import type { Nannies } from "../../redux/nannies/types";
import { selectIsAuthenticated } from "../../redux/auth/selectors";

import css from "./NanniesList.module.css";

type NanniesListProps = {
  nannies: Nannies;
};

const NanniesList = ({ nannies }: NanniesListProps) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  // console.log("Nannies data:", nannies);
  // console.log("Is user authenticated:", isAuthenticated);
  // console.log("Nannies:", nannies);
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
