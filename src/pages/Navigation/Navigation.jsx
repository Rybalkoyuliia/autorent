import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../img/wheel.png';
import { StyledList, StyledNavLink, StyledNavList } from './Navigation.styled';
import { StyledDiv, StyledImg } from 'components/Layout/Layout.styled';

const Navigation = () => {
  return (
    <StyledNavList>
      <Link to="/">
        <StyledDiv>
          <StyledImg src={img} alt="" />
        </StyledDiv>
      </Link>
      <StyledList>
        <li>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </li>
      </StyledList>
    </StyledNavList>
  );
};

export default Navigation;
