import styled from 'styled-components';
import vehicle from '../../img/BlueCar.avif';
import { Link } from 'react-router-dom';

export const MainStyledTitle = styled.h1`
  font-size: 8vh;
  font-weight: bold;
`;

export const MainStyledContainer = styled.div`
  width: 46%;
  height: 100%;
  position: absolute;
  padding-top: 20vh;
  left: 40px;
`;

export const MainSlogan = styled.p`
  font-size: 4vh;
  margin-bottom: 65px;
`;
export const ImgStyledContainer = styled.div`
  background-image: url(${vehicle});
  background-size: 100%;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  overflow: hidden;
  opacity: 0.8;
`;

export const StyledMain = styled.main`
  overflow: hidden;
  height: 100vh;
  position: relative;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: rgba(52, 112, 255, 1);
  padding: 12px 100px;
  border-radius: 12px;
  font-size: 30px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
  }
  &:active {
    background-color: darkblue;
  }
`;

export const StyledMarkList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  gap: 4vh;
  position: absolute;
  bottom: 20vh;
`;
