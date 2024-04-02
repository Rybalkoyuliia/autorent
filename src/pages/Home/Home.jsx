import React from 'react';
import {
  ImgStyledContainer,
  MainSlogan,
  MainStyledContainer,
  MainStyledTitle,
  StyledLink,
  StyledMain,
  StyledMarkList,
} from './Home.styled';
import sprite from '../../img/sprite.svg';

const Home = () => {
  return (
    <StyledMain>
      <MainStyledContainer>
        <MainStyledTitle>
          PREMIUM CAR <br />
          RENTAL
        </MainStyledTitle>

        <MainSlogan>
          Popular brands of cars <br />
          in complete configuration
        </MainSlogan>

        <StyledLink to="catalog">Catalog</StyledLink>

        <StyledMarkList>
          <li>
            <svg width="70" height="70">
              <use
                xlinkHref={`${sprite}#icon-toyota`}
                fill="rgb(214,214,214)"
              />
            </svg>
          </li>
          <li>
            <svg width="70" height="70">
              <use
                xlinkHref={`${sprite}#icon-hyundai`}
                fill="rgb(214,214,214)"
              />
            </svg>
          </li>
          <li>
            <svg width="70" height="70">
              <use xlinkHref={`${sprite}#icon-mazda`} fill="rgb(214,214,214)" />
            </svg>
          </li>
          <li>
            <svg width="70" height="70">
              <use
                xlinkHref={`${sprite}#icon-mercedes`}
                fill="rgb(214,214,214)"
              />
            </svg>
          </li>
          <li>
            <svg width="70" height="70">
              <use xlinkHref={`${sprite}#icon-audi`} fill="rgb(214,214,214)" />
            </svg>
          </li>
        </StyledMarkList>
      </MainStyledContainer>
      <ImgStyledContainer></ImgStyledContainer>
    </StyledMain>
  );
};

export default Home;
