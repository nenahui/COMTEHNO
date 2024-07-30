import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types';
import { login, register } from './authThunks';

export interface AuthState {
  isLoggedIn: boolean;
  isCreating: boolean;
  isLogging: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isCreating: false,
  isLogging: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isCreating = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isCreating = false;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state) => {
        state.isCreating = false;
      });

    builder
      .addCase(login.pending, (state) => {
        state.isLogging = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLogging = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLogging = false;
      });
  },
  selectors: {
    selectIsCreating: (state) => state.isCreating,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsLogging: (state) => state.isLogging,
    selectUser: (state) => state.user,
  },
});

export const { selectIsCreating, selectIsLoggedIn, selectUser, selectIsLogging } =
  authSlice.selectors;
export const { loginSuccess } = authSlice.actions;
