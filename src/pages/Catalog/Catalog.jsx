import VehicleList from 'components/VehicleList/VehicleList';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDataThunk } from '../../redux/operations';
import {
  StyledCatalogContainer,
  StyledMainContainerMain,
} from './Catalog.styled';
import { FormLabel } from 'components/Form/FormLabel';
import {
  LoadMoreButton,
  LoadMoreButtonContainer,
} from 'components/VehicleList/VehicleList.styled';
import { selectCars } from '../../redux/slice';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const vehicles = useSelector(selectCars);
  const onLoadMore = () => {
    setPage(page + 1);
    dispatch(fetchDataThunk(page + 1));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
    <StyledMainContainerMain>
      <FormLabel />
      <StyledCatalogContainer>
        <VehicleList />{' '}
        {vehicles.length < 25 && (
          <LoadMoreButtonContainer>
            <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>
          </LoadMoreButtonContainer>
        )}
      </StyledCatalogContainer>
    </StyledMainContainerMain>
  );
};

export default Catalog;
