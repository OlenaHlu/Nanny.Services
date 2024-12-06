import { RootState } from "../store";
import { type Nanny } from "./types";
import { SelectBoolean, SelectError, SelectString } from "../types";

export const selectNannies = (state: RootState): Nanny[] =>
  state.nannies.nannies;
export const selectIsLoading: SelectBoolean = (state) =>
  state.nannies.isLoading;
export const selectError: SelectError = (state) => state.nannies.error;
