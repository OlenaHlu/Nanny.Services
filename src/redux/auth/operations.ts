import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, firestore } from "../../fetch/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export type User = {
  email: string | null;
  uid: string | null;
};

export const registerUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/register", async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(firestore, "users", user.uid!), {
      email: user.email,
      createdAt: new Date().toISOString(),
    });

    return { email: user.email, uid: user.uid };
  } catch (error) {
    return thunkAPI.rejectWithValue("Registration failed");
  }
});

export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, thunkAPI) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return { email: user.email, uid: user.uid };
  } catch (error) {
    return thunkAPI.rejectWithValue("Login failed");
  }
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkAPI.rejectWithValue("Logout failed");
    }
  }
);
