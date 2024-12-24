import { RootState } from "../store";
import { type Nanny } from "./types";
import { SelectBoolean, SelectError } from "../types";

export const selectNannies = (state: RootState): Nanny[] =>
  state.nannies.nannies;
export const selectVisibleCount = (state: RootState) =>
  state.nannies.visibleCount;
export const selectIsLoading: SelectBoolean = (state) =>
  state.nannies.isLoading;
export const selectError: SelectError = (state) => state.nannies.error;
// export const selectVisibleNannies = (state: RootState) =>
//   state.nannies.nannies.slice(0, state.nannies.visibleCount);
