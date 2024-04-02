import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { clearFilters, filterCars, selectCars } from '../../redux/slice';
import {
  StyledForm,
  StyledInputFrom,
  StyledInputTo,
  StyledLabel,
  StyledResetButton,
  StyledSearchButton,
} from './Form.styled';
import { GrPowerReset } from 'react-icons/gr';
import { useForm } from 'react-hook-form';
import { fetchDataThunk } from '../../redux/operations';

export const FormLabel = () => {
  const dispatch = useDispatch();
  const optionsBrand = [];
  const optionsPrice = [];
  const vehicles = useSelector(selectCars);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState(null);
  const [mileageTo, setMileageTo] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const uniqueBrands = vehicles.reduce((acc, vehicle) => {
    if (!acc.some(v => v.value === vehicle.make)) {
      acc.push({ value: vehicle.make, label: vehicle.make });
    }
    return acc;
  }, optionsBrand);
  optionsBrand.push(...uniqueBrands);
  const arr = [];
  vehicles.map(vehicle => {
    return arr.push(`${vehicle.rentalPrice}`);
  });
  const numberArr = arr.map(item => parseInt(item.replace('$', '')));
  const maxPrice = Math.max(...numberArr);
  const steps = Math.ceil(maxPrice / 10);

  for (let i = 1; i <= steps; i++) {
    optionsPrice.push({
      value: i * 10,
      label: `${i * 10}$`,
    });
  }
  const onValue = selectedOption => {
    return setBrand(selectedOption.value);
  };
  const onValuePrice = selectedOption => {
    return setPrice(selectedOption.value);
  };

  const handleMinValue = e => {
    return setMileageFrom(e.target.value);
  };

  const handleMaxValue = e => {
    return setMileageTo(e.target.value);
  };
  const onSearch = () => {
    if (
      brand !== '' ||
      price !== '' ||
      mileageFrom !== null ||
      mileageTo !== null
    ) {
      dispatch(fetchDataThunk(3));
    }
    dispatch(
      filterCars({
        brand: brand,
        price: price,
        mileageFrom: mileageFrom,
        mileageTo: mileageTo,
      })
    );
  };
  const clearSelections = () => {
    dispatch(clearFilters());
    setBrand('');
    setPrice('');
    setMileageFrom(null);
    setMileageTo(null);
    reset();
    dispatch(fetchDataThunk(1));
  };
  console.log(brand);
  return (
    <StyledForm onSubmit={handleSubmit(onSearch)}>
      <StyledLabel>
        Car brand
        <Select
          {...register('brand')}
          options={optionsBrand}
          placeholder="Enter the text"
          onChange={onValue}
          styles={{
            control: base => ({
              ...base,
              backgroundColor: 'rgba(247, 247, 251, 1)',
              width: '224px',
              height: '48px',
              border: 'none',
              borderRadius: '14px',
              paddingLeft: '18px',
            }),
          }}
        />
      </StyledLabel>
      <StyledLabel>
        Price/ 1hour
        <Select
          {...register('price')}
          options={optionsPrice}
          placeholder="To $"
          onChange={onValuePrice}
          onInputChange={brand}
          styles={{
            control: base => ({
              ...base,
              width: '125px',
              height: '48px',
              backgroundColor: 'rgba(247, 247, 251, 1)',
              border: 'none',
              borderRadius: '14px',
              paddingLeft: '18px',
            }),
          }}
        />
      </StyledLabel>
      <StyledLabel>
        Car mileage/ km
        <div>
          <StyledInputFrom
            {...register('mileageFrom')}
            placeholder="From"
            type="number"
            onChange={handleMinValue}
          ></StyledInputFrom>
          <StyledInputTo
            {...register('mileageTo')}
            placeholder="To"
            type="number"
            onChange={handleMaxValue}
          ></StyledInputTo>
        </div>
      </StyledLabel>
      <StyledSearchButton type="submit">Search</StyledSearchButton>
      <StyledResetButton onClick={clearSelections}>
        <GrPowerReset />
      </StyledResetButton>
    </StyledForm>
  );
};
