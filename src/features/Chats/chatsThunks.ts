import { onValue, push, ref } from 'firebase/database';
import type { AppDispatch } from '../../app/store';
import { database } from '../../firebaseConfig';
import type { ApiMessage } from '../../types';
import { setError, setLoading, setMessages } from './chatsSlice';

export const fetchMessages = () => (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  const messagesRef = ref(database, 'messages/');

  onValue(
    messagesRef,
    (snapshot) => {
      const data = snapshot.val();
      const messagesList: ApiMessage[] = data ? Object.values(data) : [];
      const reversedMessagesList = messagesList.reverse();
      dispatch(setMessages(reversedMessagesList));
      dispatch(setLoading(false));
    },
    () => {
      dispatch(setError());
      dispatch(setLoading(false));
    }
  );
};

export const sendMessage = (messageData: ApiMessage) => async (dispatch: AppDispatch) => {
  try {
    const messagesRef = ref(database, 'messages/');
    await push(messagesRef, messageData);
  } catch (error) {
    dispatch(setError());
  }
};
