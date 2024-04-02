import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  position: relative;
  width: 461px;
  height: 672px;
  margin: auto;
  background-color: white;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
export const StyledInnerModalWrapper = styled.div`
  overflow-y: scroll;
`;

export const StyledImg = styled.img`
  max-width: 461px;
  min-width: 100%;
  min-height: 100%;
`;

export const StyledImgWrapper = styled.div`
  width: 461px;
  height: 248px;
  overflow: hidden;
  border-radius: 14px;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  padding: 6px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledVehicleChracteristicsListModal = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0;
`;

export const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(18, 20, 23, 1);
  margin: 14px 0px 0px;
`;

export const StyledModalTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  color: #121417;
  margin: 14px 0px 8px;
`;
export const StyledModalAccent = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const StyledModalVehicleCharacteristicsItem = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  padding: 0 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;
export const StyledModalVehicleCharacteristicsItemLast = styled.li`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  padding: 0 6px;
`;

export const StyledSmallTitle = styled.h4`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(18, 20, 23, 1);
  margin: 24px 0px 8px 0px;
`;

export const StyledModalRequirementsList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  gap: 8px;
  margin: 0px;
  margin-bottom: 24px;
`;

export const StyledModalRequirementsItem = styled.li`
  background-color: rgba(249, 249, 249, 1);
  border-radius: 35px;
  padding: 7px 14px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(54, 53, 53, 1);
`;

export const StyledModalRentalButton = styled.button`
  padding: 12px 50px;
  border-radius: 12px;
  border: none;
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
`;
