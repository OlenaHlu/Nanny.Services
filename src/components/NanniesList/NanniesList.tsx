import NanniesCard from "../NanniesCard/NanniesCard";
import type { Nannies } from "../../redux/nannies/types";

import css from "./NanniesList.module.css";

type NanniesListProps = {
  nannies: Nannies;
};

const NanniesList = ({ nannies }: NanniesListProps) => {
  if (!Array.isArray(nannies) || nannies.length === 0) {
    return <p className={css.noNannies}>No nannies available.</p>;
  }
  return (
    <ul>
      {nannies.map((nanny) => {
        return <NanniesCard key={nanny.id} nanny={nanny} />;
      })}
    </ul>
  );
};

export default NanniesList;
