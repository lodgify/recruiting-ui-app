import styled from 'styled-components';

export const BookingPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  .title {
    font-size: 35px;
    padding-top: 25px;
    padding-bottom: 10px;
  }
  .text {
    padding-bottom: 15px;
  }
`;

export const BookingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: calc(100vh - 200px);
  background-color: #ebebe4;
`;

export const ListComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #dfdfdb;
`;

export const ButtonWrapper = styled.button`
  color: #000000;
  font-size: 14px;
  margin: 15px;
  padding: 15px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#76f1ab'};
  border: ${props => (props.border ? props.border : '#76f1ab')};
  cursor: pointer;
  font-weight: bold;
  width: ${props => (props.width ? props.width : '80%')};
`;

export const FooterWrapper = styled.div`
  background-color: #ebebe4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
`;
