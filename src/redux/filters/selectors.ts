import { RootState } from "../store";

export const selectNanniesPageFilter = (state: RootState) =>
  state.filters.nanniesPageFilter;

export const selectFavoritesPageFilter = (state: RootState) =>
  state.filters.favoritesPageFilter;
