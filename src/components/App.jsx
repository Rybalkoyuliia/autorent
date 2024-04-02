import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>{' '}
    </div>
  );
};
