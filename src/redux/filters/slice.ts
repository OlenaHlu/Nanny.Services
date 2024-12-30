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
    resetFilters(state) {
      state.nanniesPageFilter = "Show all";
      state.favoritesPageFilter = "Show all";
    },
  },
});

export const { setNanniesPageFilter, setFavoritesPageFilter, resetFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
