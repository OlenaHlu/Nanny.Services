import { createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../../fetch/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
export const loadFavorites = createAsyncThunk<
  { userId: string; favorites: string[] },
  void,
  { rejectValue: string; state: { auth: { user: { uid: string } | null } } }
>("favorites/loadFavorites", async (_, thunkAPI) => {
  const user = thunkAPI.getState().auth.user;
  if (!user) {
    return thunkAPI.rejectWithValue("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "favorites", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { userId: user.uid, favorites: docSnap.data().favorites || [] };
    } else {
      return { userId: user.uid, favorites: [] };
    }
  } catch (error) {
    console.error("Error loading favorites:", error);
    return thunkAPI.rejectWithValue("Failed to load favorites");
  }
});

export const saveFavorites = createAsyncThunk<
  void,
  string[],
  { rejectValue: string; state: { auth: { user: { uid: string } | null } } }
>("favorites/saveFavorites", async (favorites, thunkAPI) => {
  const user = thunkAPI.getState().auth.user;
  if (!user) {
    return thunkAPI.rejectWithValue("User is not authenticated");
  }

  try {
    const docRef = doc(firestore, "favorites", user.uid);
    await setDoc(docRef, { favorites });
  } catch (error) {
    console.error("Error saving favorites:", error);
    return thunkAPI.rejectWithValue("Failed to save favorites");
  }
});
