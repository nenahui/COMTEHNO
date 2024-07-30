// firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyACDhn31a0co0Fwqd3bc7kPFx_C_7BpxBo',
  authDomain: 'comtehno-chat.firebaseapp.com',
  projectId: 'comtehno-chat',
  storageBucket: 'comtehno-chat.appspot.com',
  messagingSenderId: '407452175004',
  appId: '1:407452175004:web:584d9a1114bb4442027b59',
  databaseURL: 'https://comtehno-chat-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
