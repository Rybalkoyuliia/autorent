import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from 'pages/Navigation/Navigation';
import Loader from 'components/Loader/Loader';

import { StyledHeader } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>{' '}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
