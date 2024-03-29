import NotFound from 'pages/NotFound/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Catalog from '../pages/Catalog/Catalog';
import Favorites from '../pages/Favorites/Favorites';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>{' '}
    </div>
  );
};
