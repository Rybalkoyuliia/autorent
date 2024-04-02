import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavList = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  text-decoration: none;
  color: black;
  font-size: 24px;
`;
