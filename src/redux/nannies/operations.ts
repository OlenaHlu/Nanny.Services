import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Nanny } from "./types";

axios.defaults.baseURL =
  "https://nannyservices-e37ec-default-rtdb.firebaseio.com";

export const getNannies = createAsyncThunk<
  Nanny[],
  void,
  { rejectValue: string }
>("nannies/getAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/nannies.json");
    console.log("Response data from Firebase:", response.data);
    if (!response.data) {
      return [];
    }
    return Object.entries(response.data).map(([id, nanny]) => ({
      id,
      ...(nanny as Omit<Nanny, "id">),
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching nannies:", error.message);
      return thunkAPI.rejectWithValue(
        "Permission denied: Check your Firebase rules."
      );
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
