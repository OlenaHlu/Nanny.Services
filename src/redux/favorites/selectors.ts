import { RootState } from "../store";

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const isNannyFavorite = (nannyId: string) => (state: RootState) =>
  state.favorites.favorites.includes(nannyId);
