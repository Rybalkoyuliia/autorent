import Navigation from 'pages/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>{' '}
      <Outlet />
    </>
  );
};

export default Layout;
