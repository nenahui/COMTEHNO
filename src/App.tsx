import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CustomLayout } from './components/CustomLayout/CustomLayout';
import { Home } from './features/Home/Home';
import { News } from './features/News/News';
import { Questionnaires } from './features/Questionnaires/Questionnaires';
import { Statistics } from './features/Statistics/Statistics';

export const App: React.FC = () => {
  return (
    <CustomLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/questionnaires' element={<Questionnaires />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </CustomLayout>
  );
};
