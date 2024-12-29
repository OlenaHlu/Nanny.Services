import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
  nanniesPageFilter: string;
  favoritesPageFilter: string;
};

const initialState: FiltersState = {
  nanniesPageFilter: "Show all",
  favoritesPageFilter: "Show all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setNanniesPageFilter: (state, action: PayloadAction<string>) => {
      state.nanniesPageFilter = action.payload;
    },
    setFavoritesPageFilter: (state, action: PayloadAction<string>) => {
      state.favoritesPageFilter = action.payload;
    },
  },
});

export const { setNanniesPageFilter, setFavoritesPageFilter } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
