import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FiltersState = {
  filters: string;
};

const initialState: FiltersState = {
  filters: "Show all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<string>) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
