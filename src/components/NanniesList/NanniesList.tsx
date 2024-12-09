import NanniesCard from "../NanniesCard/NanniesCard";
import type { Nannies } from "../../redux/nannies/types";

import css from "./NanniesList.module.css";

type NanniesListProps = {
  nannies: Nannies;
};

const NanniesList = ({ nannies }: NanniesListProps) => {
  return (
    <ul className={css.nanniesList}>
      {nannies.map((nanny) => (
        <li key={nanny.id}>
          <NanniesCard nanny={nanny} />
        </li>
      ))}
    </ul>
  );
};

export default NanniesList;
