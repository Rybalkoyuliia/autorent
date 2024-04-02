import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FormLabel } from 'components/Form/FormLabel';
import VehicleList from 'components/VehicleList/VehicleList';
import Loader from 'components/Loader/Loader';
import { fetchDataThunk } from '../../redux/operations';
import { selectCars, selectIsLoading } from '../../redux/slice';

import {
  StyledCatalogContainer,
  StyledMainContainerMain,
} from './Catalog.styled';
import {
  LoadMoreButton,
  LoadMoreButtonContainer,
} from 'components/VehicleList/VehicleList.styled';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const vehicles = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const onLoadMore = () => {
    setPage(page + 1);
    dispatch(fetchDataThunk(page + 1));
  };

  useEffect(() => {
    dispatch(fetchDataThunk(page));
  }, [dispatch, page]);

  console.log(isLoading);

  return (
    <StyledMainContainerMain>
      {isLoading === false ? (
        <>
          <FormLabel />
          <StyledCatalogContainer>
            <VehicleList />
            {vehicles.length < 25 && (
              <LoadMoreButtonContainer>
                <LoadMoreButton
                  onClick={e => {
                    e.preventDefault();
                    onLoadMore();
                  }}
                >
                  Load more
                </LoadMoreButton>
              </LoadMoreButtonContainer>
            )}
          </StyledCatalogContainer>
        </>
      ) : (
        <Loader />
      )}
    </StyledMainContainerMain>
  );
};

export default Catalog;
