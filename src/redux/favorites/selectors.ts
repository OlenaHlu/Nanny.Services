import { RootState } from "../store";

export const selectFavoritesByUser =
  (userId: string | null) => (state: RootState) => {
    console.log("Favorites state:", state.favorites.byUserId);
    if (!userId) return [];
    return state.favorites.byUserId?.[userId] || [];
  };

export const isNannyFavorite =
  (nannyId: string, userId: string | null) => (state: RootState) => {
    if (!userId) return false;
    return (state.favorites.byUserId?.[userId] || []).includes(nannyId); // Перевіряємо наявність nannyId
  };
