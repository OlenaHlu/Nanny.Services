import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadFavorites, saveFavorites } from "./operations";

type FavoritesState = {
  byUserId: Record<string, string[]>;
  isLoading: boolean;
  error: string | null;
};

const initialState: FavoritesState = {
  byUserId: {},
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (
      state,
      action: PayloadAction<{ nannyId: string; userId: string }>
    ) => {
      const { nannyId, userId } = action.payload;

      if (!userId) {
        console.error("Missing userId in toggleFavorite");
        return;
      }

      if (!state.byUserId) {
        state.byUserId = {};
      }

      if (!state.byUserId[userId]) {
        state.byUserId[userId] = [];
      }

      if (state.byUserId[userId].includes(nannyId)) {
        state.byUserId[userId] = state.byUserId[userId].filter(
          (id) => id !== nannyId
        );
      } else {
        state.byUserId[userId].push(nannyId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFavorites.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        const { userId, favorites } = action.payload;

        if (!state.byUserId[userId]) {
          state.byUserId[userId] = [];
        }
        state.byUserId[userId] = favorites;
        state.isLoading = false;
      })
      .addCase(loadFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(saveFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveFavorites.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(saveFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
