import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Nanny } from "./types";

axios.defaults.baseURL =
  "https://nannyservices-e37ec-default-rtdb.firebaseio.com/";

export const getNannies = createAsyncThunk<
  Nanny[],
  void,
  { rejectValue: string }
>("nannies/getAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/nannies");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
