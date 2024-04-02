import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from 'components/Modal/Modal';
import NotFound from 'pages/NotFound/NotFound';
import {
  selectCars,
  selectFilteredCarsBrand,
  selectFilteredCarsMileageFrom,
  selectFilteredCarsMileageTo,
  selectFilteredCarsPrice,
} from '../../redux/slice';

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
} from './VehicleList.styled';

const VehicleList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();

  const vehicles = useSelector(selectCars);
  const filterBrand = useSelector(selectFilteredCarsBrand);
  const filterPrice = useSelector(selectFilteredCarsPrice);
  const filterMileageFrom = useSelector(selectFilteredCarsMileageFrom);
  const filterMileageTo = useSelector(selectFilteredCarsMileageTo);

  const handleFilter = () => {
    let filteredVehicles = [...vehicles];

    if (filterBrand !== '') {
      filteredVehicles = filteredVehicles.filter(
        vehicle => vehicle.make === filterBrand
      );
    }

    if (filterPrice !== '') {
      let tempVehicles = [...filteredVehicles];
      filteredVehicles = tempVehicles.filter(
        vehicle =>
          parseFloat(vehicle.rentalPrice.replace('$', '')) <
          parseFloat(filterPrice)
      );
    }

    if (filterMileageFrom !== null) {
      let tempVehicles = [...filteredVehicles];
      filteredVehicles = tempVehicles.filter(
        vehicle => vehicle.mileage > filterMileageFrom
      );
    }

    if (filterMileageTo !== null) {
      let tempVehicles = [...filteredVehicles];
      filteredVehicles = tempVehicles.filter(
        vehicle => vehicle.mileage < filterMileageTo
      );
    }

    if (
      filterBrand === '' &&
      filterPrice === '' &&
      filterMileageFrom === null &&
      filterMileageTo === null
    ) {
      return vehicles;
    } else {
      return filteredVehicles;
    }
  };
  const [favorite, setFavorite] = useState([]);

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
    const favorites = JSON.parse(localStorage.getItem('favorite')) || [];
    setFavorite(favorites);
  }, []);
  console.log(handleFilter().length);
  return (
    <>
      {handleFilter().length !== 0 ? (
        <StyledCatalogList>
          {handleFilter().map(vehicle => (
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
        <NotFound />
      )}

      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        id={id}
      />
    </>
  );
};

export default VehicleList;
