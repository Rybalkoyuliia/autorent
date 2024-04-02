import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const StyledNotFoundTitle = styled.h1`
  text-align: center;
  font-size: 40px;
`;

export const StyledGoHomeLink = styled(Link)`
  margin: 0 auto;
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: rgba(52, 112, 255, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
  }
  &:active {
    color: darkblue;
  }
`;
