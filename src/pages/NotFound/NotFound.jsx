import React from 'react';

import { StyledContainer, StyledNotFoundTitle } from './NotFound.styled';

const NotFound = () => {
  return (
    <StyledContainer>
      <StyledNotFoundTitle>No matches were found</StyledNotFoundTitle>
    </StyledContainer>
  );
};

export default NotFound;
