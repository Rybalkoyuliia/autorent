import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  margin: 0 auto;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const StyledInputFrom = styled.input`
  height: 48px;
  width: 160px;
  border-bottom-left-radius: 14px;
  border-top-left-radius: 14px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: rgba(18, 20, 23, 1);
  padding-left: 24px;

  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.1;
    color: rgba(18, 20, 23, 1);
  }
`;

export const StyledInputTo = styled.input`
  height: 48px;
  width: 160px;
  border-bottom-right-radius: 14px;
  border-top-right-radius: 14px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: rgba(18, 20, 23, 1);
  padding-left: 24px;
  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.1;
    color: rgba(18, 20, 23, 1);
  }
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: #8a8a89;
`;

export const StyledSearchButton = styled.button`
  width: 136px;
  height: 48px;
  background-color: rgba(52, 112, 255, 1);
  border: none;
  border-radius: 14px;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 14px;
`;

export const StyledResetButton = styled.button`
  background-color: rgba(52, 112, 255, 1);
  color: rgba(255, 255, 255, 1);
  height: 48px;
  width: 48px;
  border: none;
  border-radius: 14px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
