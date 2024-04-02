import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0px;
  background-color: rgba(244, 249, 259, 1);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const StyledDiv = styled.div`
  width: 200px;
  height: auto;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 50%;
  height: auto;
  padding: 0;
  margin: 0;
`;
