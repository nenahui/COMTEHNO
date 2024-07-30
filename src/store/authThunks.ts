import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import type { RootState } from '../app/store';
import { auth } from '../firebaseConfig';
import type { User, UserAuth } from '../types';

export const register = createAsyncThunk<void, UserAuth, { state: RootState }>(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password } = userData;

      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        console.error('Email already in use');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error during registration:', error);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const login = createAsyncThunk<User, UserAuth, { state: RootState }>(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { email, password } = userData;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await userCredential.user.getIdToken();
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ uid: user.uid, email: user.email }));
      console.log('User logged in:', userCredential.user);

      return {
        uid: user.uid,
        metadata: {
          lastLoginInTime: user.metadata.creationTime,
        },
        email: user.email,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error during login:', error);
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error occurred during login');
    }
  }
);
