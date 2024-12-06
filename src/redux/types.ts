import { RootState } from "./store";

export type SelectBoolean = (state: RootState) => boolean;
export type SelectString = (state: RootState) => string;
export type SelectError = (state: RootState) => Error | string | null;
