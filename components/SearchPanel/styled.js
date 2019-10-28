import styled from '@emotion/styled';
import { searchPanelGrey, searchPlaceholder, searchPanelBottom, white, green } from 'styles/colors';

export const SearchPanelWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${searchPanelGrey};
`;

export const SearchBoxWrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${searchPanelBottom};
`;

export const InputWrapper = styled.div`
  flex: 1 1 300px;
  overflow: hidden;
  position: relative;
  display: inline-flex;
  border: 1px solid ${white};
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  height: 40px;
  outline: none;
  font-size: 14px;
  min-height: 40px;
  padding-left: 16px;

  &::placeholder {
    font-size: 14px;
    padding-left: 8px;
    color: ${searchPlaceholder};
  }
`;

export const ResultsWrapper = styled.div`
  height: 72vh;
  overflow: scroll;
  padding-right: 4px;
`;

export const BookingButton = styled.button`
  height: 40px;
  width: 320px;
  outline: none;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${green};
`;

export const Image = styled.img``;

export const OptionsAndButtonWrapper = styled.div`
  display: flex;
  padding: 16px;
  font-weight: 600;
  justify-content: space-between;
  background: ${searchPanelGrey};
  border-top: 1px solid ${searchPanelBottom};
  border-bottom: 1px solid ${searchPanelBottom};
`;
