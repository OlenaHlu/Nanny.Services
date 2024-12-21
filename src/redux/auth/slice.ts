import { type User } from "./operations";
import { registerUser, loginUser, logoutUser } from "./operations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: AuthState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload ?? "Something went wrong";
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ email: string; uid: string }>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, handleRejected)

      //login
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, handleRejected)

      //logout
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, handleRejected);
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
