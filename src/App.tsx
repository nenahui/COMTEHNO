import { Typography } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import { CustomLayout } from './components/CustomLayout/CustomLayout';
import { Chats } from './features/Chats/Chats';
import { Home } from './features/Home/Home';
import { News } from './features/News/News';
import { Questionnaires } from './features/Questionnaires/Questionnaires';
import { Statistics } from './features/Statistics/Statistics';
import { loginSuccess } from './store/authSlice';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const checkAuth = useCallback(() => {
    const token = localStorage.getItem('token');
    const userLocale = localStorage.getItem('user');
    if (token && userLocale) {
      const user = JSON.parse(userLocale);
      dispatch(loginSuccess(user));
    }
  }, [dispatch]);

  useEffect(() => {
    void checkAuth();
  }, [checkAuth]);

  if (window.innerWidth > 500) {
    return (
      <Typography.Text
        type={'danger'}
        style={{ fontSize: '0.8rem', width: '100%', textAlign: 'center' }}
        className={'a-centered'}
      >
        Пожалуйста, зайдите с телефона!
      </Typography.Text>
    );
  }

  return (
    <CustomLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/questionnaires' element={<Questionnaires />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </CustomLayout>
  );
};
