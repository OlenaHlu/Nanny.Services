import { RootState } from "../store";
import { SelectBoolean, SelectError, SelectString } from "../types";
import { User } from "./operations";

export const selectUser = (state: RootState): User | null => state.auth.user;
export const selectIsLoading: SelectBoolean = (state) => state.auth.isLoading;
export const selectAuthError: SelectError = (state) => state.auth.error;
export const selectIsAuthenticated: SelectBoolean = (state) =>
  state.auth.isAuthenticated;
export const selectUserId = (state: RootState): string | null =>
  state.auth.user?.uid || null;
export const selectUserName: SelectString = (state) =>
  state.auth.user?.name || "User";
