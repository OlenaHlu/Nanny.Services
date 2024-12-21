import { RootState } from "../store";
import { SelectBoolean, SelectError } from "../types";
import { User } from "./operations";

export const selectUser = (state: RootState): User | null => state.auth.user;
export const selectIsLoading: SelectBoolean = (state) => state.auth.isLoading;
export const selectAuthError: SelectError = (state) => state.auth.error;
export const selectIsAuthenticated: SelectBoolean = (state) =>
  state.auth.isAuthenticated;
