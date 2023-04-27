import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout/Layout';
const HomePage = lazy(() => import('pages/HomePage'));
const TweetsPage = lazy(() => import('pages/Tweets'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} replace={true} />
      </Route>
    </Routes>
  );
};

