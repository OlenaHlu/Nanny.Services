import { useState } from "react";
import Icon from "../common/Icon";

import css from "./FilterForm.module.css";

type FilterFormProps = {
  selectedFilters: string;
  onFilterChange: (filter: string) => void;
};

const FilterForm: React.FC<FilterFormProps> = ({
  selectedFilters,
  onFilterChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const filters = [
    "A to Z",
    "Z to A",
    "Less than 17$",
    "Greater than 17$",
    "Popular",
    "Not popular",
    "Show all",
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleFiltersClick = (filter: string) => {
    onFilterChange(filter);
    setIsOpen(false);
  };

  return (
    <div className={css.filterContainer}>
      <p className={css.filterText}>Filters</p>
      <button className={css.filterBtn} onClick={toggleDropdown}>
        {selectedFilters}
        <span className={css.iconContainer}>
          {isOpen ? (
            <Icon className={css.iconUp} iconName="chevron-down" />
          ) : (
            <Icon className={css.iconDown} iconName="chevron-down" />
          )}
        </span>
      </button>
      {isOpen && (
        <ul className={css.filterList}>
          {filters.map((filter) => (
            <li
              key={filter}
              className={`${css.filterItem} ${
                selectedFilters === filter ? css.active : ""
              }`}
              onClick={() => handleFiltersClick(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterForm;
