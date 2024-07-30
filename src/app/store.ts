import { configureStore } from '@reduxjs/toolkit';
import { messagesSlice } from '../features/Chats/chatsSlice';
import { authSlice } from '../store/authSlice';

export const store = configureStore({
  reducer: {
    messages: messagesSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
