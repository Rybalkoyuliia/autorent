import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from 'components/Modal/Modal';
import NoFav from 'components/NoFav/NoFav';
import { selectCars } from '../../redux/slice';

import sprite from '../../img/sprite.svg';
import {
  StyledAccent,
  StyledCatalogImg,
  StyledCatalogLi,
  StyledCatalogList,
  StyledHeartGrey,
  StyledImgCatalogWrapper,
  StyledInfoWrapper,
  StyledLearnMoreButton,
  StyledLiTitle,
  StyledLiTitlePrice,
  StyledTitleWrapper,
  StyledVehicleChracteristicsItem,
  StyledVehicleChracteristicsItemLast,
  StyledVehicleChracteristicsList,
} from 'components/VehicleList/VehicleList.styled';
import { StyeldFavoritesMain } from './Favorites.styled';

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();
  const vehicles = useSelector(selectCars);

  const toggleHeart = id => {
    const favorites = JSON.parse(localStorage.getItem('favorite')) || [];

    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorite(newFavorites);
      localStorage.setItem('favorite', JSON.stringify(newFavorites));
    } else {
      const index = favorites.indexOf(id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
      setFavorite([...favorites]);
      localStorage.setItem('favorite', JSON.stringify(favorites));
    }
  };

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('favorite'));
    if (fav) {
      setFavorite(fav);
    }
  }, []);

  const getFavList = () => {
    const favoriteVehicles = vehicles.filter(vehicle =>
      favorite.includes(vehicle.id)
    );
    return favoriteVehicles;
  };

  return (
    <StyeldFavoritesMain>
      {getFavList().length !== 0 ? (
        <StyledCatalogList>
          {getFavList().map(vehicle => (
            <StyledCatalogLi key={vehicle.id}>
              <StyledImgCatalogWrapper>
                <StyledHeartGrey
                  onClick={() => {
                    toggleHeart(vehicle.id);
                  }}
                >
                  {!favorite.includes(vehicle.id) ? (
                    <svg width="18" height="18">
                      <use xlinkHref={`${sprite}#icon-heart`} />
                    </svg>
                  ) : (
                    <svg width="18" height="18">
                      <use
                        xlinkHref={`${sprite}#icon-BlueHeart`}
                        fill="rgba(52, 112, 255, 1)"
                      />
                    </svg>
                  )}
                </StyledHeartGrey>
                <StyledCatalogImg src={vehicle.img} alt={vehicle.description} />
              </StyledImgCatalogWrapper>
              <StyledInfoWrapper>
                <div>
                  <StyledTitleWrapper>
                    <StyledLiTitle>
                      {`${vehicle.make}`}{' '}
                      <StyledAccent>{`${vehicle.model}`}</StyledAccent>,{' '}
                      {`${vehicle.year}`}
                    </StyledLiTitle>
                    <StyledLiTitlePrice>
                      {vehicle.rentalPrice}
                    </StyledLiTitlePrice>
                  </StyledTitleWrapper>
                  <StyledVehicleChracteristicsList>
                    <StyledVehicleChracteristicsItem>
                      {vehicle.address.split(', ')[1]}
                    </StyledVehicleChracteristicsItem>
                    <StyledVehicleChracteristicsItem>
                      {vehicle.address.split(', ')[2]}
                    </StyledVehicleChracteristicsItem>
                    <StyledVehicleChracteristicsItem>
                      {vehicle.rentalCompany}
                    </StyledVehicleChracteristicsItem>
                    <StyledVehicleChracteristicsItem>
                      {vehicle.type}
                    </StyledVehicleChracteristicsItem>
                    <StyledVehicleChracteristicsItem>
                      {vehicle.model}
                    </StyledVehicleChracteristicsItem>
                    <StyledVehicleChracteristicsItem>
                      {vehicle.id}
                    </StyledVehicleChracteristicsItem>
                    <StyledVehicleChracteristicsItemLast>
                      {vehicle.functionalities[0]}
                    </StyledVehicleChracteristicsItemLast>
                  </StyledVehicleChracteristicsList>
                </div>
                <StyledLearnMoreButton
                  onClick={() => {
                    setIsOpen(true);
                    setId(vehicle.id);
                  }}
                >
                  Learn more
                </StyledLearnMoreButton>
              </StyledInfoWrapper>
            </StyledCatalogLi>
          ))}
        </StyledCatalogList>
      ) : (
        <NoFav />
      )}

      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        id={id}
      />
    </StyeldFavoritesMain>
  );
};

export default Favorites;
