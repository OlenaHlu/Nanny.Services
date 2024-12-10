import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNannies } from "./operations";
import { Nanny } from "./types";
import { type NanniesState } from "./types";

const handlePending = (state: NanniesState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: NanniesState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload || "An unknown error occurred";
};

const initialState: NanniesState = {
  nannies: [],
  isLoading: false,
  error: null,
  visibleCount: 3,
};

const nanniesSlice = createSlice({
  name: "nannies",
  initialState,
  reducers: {
    loadMore: (state, action: PayloadAction<number>) => {
      state.visibleCount += action.payload;
    },
    resetVisibleCount: (state) => {
      state.visibleCount = 3;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNannies.pending, handlePending)
      .addCase(
        getNannies.fulfilled,
        (state, action: PayloadAction<Nanny[]>) => {
          state.isLoading = false;
          state.nannies = action.payload;
        }
      )
      .addCase(getNannies.rejected, handleRejected);
  },
});

export const { loadMore, resetVisibleCount } = nanniesSlice.actions;
export const nanniesReducer = nanniesSlice.reducer;
