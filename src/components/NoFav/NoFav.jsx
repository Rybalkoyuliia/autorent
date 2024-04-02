import React from 'react';

import {
  StyledContainer,
  StyledGoHomeLink,
  StyledNotFoundTitle,
} from 'pages/NotFound/NotFound.styled';

const NoFav = () => {
  return (
    <StyledContainer>
      <StyledNotFoundTitle>
        You don't have any cars added to favorites yet <br />
        Go to Catalog and choose vehicle of your dream
      </StyledNotFoundTitle>
      <StyledGoHomeLink to="/catalog">Catalog</StyledGoHomeLink>{' '}
    </StyledContainer>
  );
};

export default NoFav;
