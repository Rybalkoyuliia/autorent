import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/slice';
import {
  StyledCloseButton,
  StyledDescription,
  StyledImg,
  StyledImgWrapper,
  StyledInnerModalWrapper,
  StyledModal,
  StyledModalAccent,
  StyledModalRentalButton,
  StyledModalRequirementsItem,
  StyledModalRequirementsList,
  StyledModalTitle,
  StyledModalVehicleCharacteristicsItem,
  StyledModalVehicleCharacteristicsItemLast,
  StyledOverlay,
  StyledSmallTitle,
  StyledVehicleChracteristicsListModal,
} from './Modal.styled';
import sprite from '../../img/sprite.svg';

const Modal = ({ open, onClose, id }) => {
  const vehicles = useSelector(selectCars);

  const car = id => vehicles.find(vehicle => vehicle.id === id);
  const auto = car(id);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  if (!open) {
    return null;
  }
  return (
    <>
      <StyledOverlay onClick={handleBackdropClick}>
        <StyledModal>
          <StyledImgWrapper>
            <StyledImg src={auto.img} alt="" />
          </StyledImgWrapper>
          <StyledInnerModalWrapper>
            <StyledCloseButton onClick={onClose}>
              <svg width="12" height="12">
                <use xlinkHref={`${sprite}#icon-close`} stroke="black" />
              </svg>
            </StyledCloseButton>
            <StyledModalTitle>
              {`${auto.make}`}{' '}
              <StyledModalAccent>{`${auto.model}`}</StyledModalAccent>,{' '}
              {`${auto.year}`}
            </StyledModalTitle>
            <StyledVehicleChracteristicsListModal>
              <StyledModalVehicleCharacteristicsItem>
                {auto.address.split(', ')[1]}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItem>
                {auto.address.split(', ')[2]}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItem>
                {`Id: ${auto.id}`}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItem>
                {`Year: ${auto.year}`}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItem>
                {`Type: ${auto.type}`}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItem>
                {`Fuel Consumption: ${auto.fuelConsumption}`}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItemLast>
                {`Engine Size: ${auto.engineSize}`}
              </StyledModalVehicleCharacteristicsItemLast>
            </StyledVehicleChracteristicsListModal>
            <StyledDescription>{auto.description}</StyledDescription>
            <StyledSmallTitle>
              Accessories and functionalities:
            </StyledSmallTitle>
            <StyledVehicleChracteristicsListModal>
              <StyledModalVehicleCharacteristicsItem>
                {auto.accessories[0]}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItem>
                {auto.accessories[1]}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItemLast>
                {auto.accessories[2]}
              </StyledModalVehicleCharacteristicsItemLast>
              <StyledModalVehicleCharacteristicsItem>
                {auto.functionalities[0]}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItem>
                {auto.functionalities[1]}
              </StyledModalVehicleCharacteristicsItem>
              <StyledModalVehicleCharacteristicsItemLast>
                {auto.functionalities[2]}
              </StyledModalVehicleCharacteristicsItemLast>
            </StyledVehicleChracteristicsListModal>
            <StyledSmallTitle>Rental conditions:</StyledSmallTitle>
            <StyledModalRequirementsList>
              <StyledModalRequirementsItem>
                {`${auto.rentalConditions.split('\n')[0].split(':')[0]}`}:{' '}
                <StyledModalAccent>{`${
                  auto.rentalConditions.split('\n')[0].split(':')[1]
                }`}</StyledModalAccent>
              </StyledModalRequirementsItem>
              <StyledModalRequirementsItem>
                {auto.rentalConditions.split('\n')[1]}
              </StyledModalRequirementsItem>
              <StyledModalRequirementsItem>
                {auto.rentalConditions.split('\n')[2]}
              </StyledModalRequirementsItem>
              <StyledModalRequirementsItem>
                Mileage:{' '}
                <StyledModalAccent>
                  {auto.mileage
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </StyledModalAccent>
              </StyledModalRequirementsItem>
              <StyledModalRequirementsItem>
                Price: <StyledModalAccent>{auto.rentalPrice}</StyledModalAccent>
              </StyledModalRequirementsItem>
            </StyledModalRequirementsList>
            <StyledModalRentalButton
              onClick={() => (window.location.href = 'tel:+380730000000')}
            >
              Rental Car
            </StyledModalRentalButton>
          </StyledInnerModalWrapper>
        </StyledModal>
        s
      </StyledOverlay>
    </>
  );
};

export default Modal;
