import { createSlice } from '@reduxjs/toolkit';
import type { ApiMessage } from '../../types';

export interface ChatState {
  messages: ApiMessage[];
  loading: boolean;
  error: boolean;
}

const initialState: ChatState = {
  messages: [],
  loading: false,
  error: false,
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setMessages(state, action) {
      state.messages = action.payload;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    setError(state) {
      state.error = true;
    },
  },
  selectors: {
    selectIsMessages: (state) => state.messages,
    selectIsLoading: (state) => state.loading,
    selectIsError: (state) => state.error,
  },
});

export const { setLoading, setMessages, addMessage, setError } = messagesSlice.actions;
export const { selectIsMessages, selectIsLoading, selectIsError } = messagesSlice.selectors;
