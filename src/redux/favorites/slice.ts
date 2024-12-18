import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  favorites: string[];
};

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const nannyId = action.payload;
      if (state.favorites.includes(nannyId)) {
        state.favorites = state.favorites.filter((id) => id !== nannyId);
      } else {
        state.favorites.push(nannyId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
