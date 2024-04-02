import styled from 'styled-components';

export const StyledCatalogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(274px, 1fr));
  justify-items: center;
  gap: 50px 29px;
  max-width: 1184px;
  margin: 0 auto;
`;

export const StyledImgCatalogWrapper = styled.div`
  position: relative;
  height: 268px;
  background: linear-gradient(
    to bottom,
    rgba(18, 20, 23, 0.5),
    rgba(18, 20, 23, 0),
    rgba(243, 243, 242, 1)
  );
  border-radius: 14px;
  overflow: hidden;
`;

export const StyledCatalogLi = styled.li`
  width: 274px;
  height: 426px;
  overflow: hidden;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 144px;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledAccent = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const StyledCatalogImg = styled.img`
  height: 268px;
`;

export const StyledLiTitle = styled.h3`
  margin: 14px 0px 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
`;
export const StyledLiTitlePrice = styled.h3`
  margin: 14px 0px 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
  padding-right: 9px;
`;
export const StyledVehicleChracteristicsList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledVehicleChracteristicsItem = styled.li`
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  padding: 0px 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;
export const StyledVehicleChracteristicsItemLast = styled.li`
  padding: 0px 6px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;

export const StyledLearnMoreButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: rgba(52, 112, 255, 1);
  border: none;
  border-radius: 14px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 14px;
  margin: 0 auto;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
  }
  &:active {
    background-color: darkblue;
  }
`;

export const LoadMoreButton = styled.button`
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
export const LoadMoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const StyledHeartGrey = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
`;
