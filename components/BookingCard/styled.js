import styled from '@emotion/styled';
import { booked, declined, unavailable, tentative, searchPanelBottom, boldText, regularText } from 'styles/colors';

export const SuperWrapper = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${searchPanelBottom};
`;

export const StatusWrapper = styled.div`
  display: flex;
  padding: 6px 0 0 16px;
  flex-direction: column;
`;

export const StatusIcon = styled.span`
  width: 8px;
  height: 8px;
  display: block;
  border-radius: 4px;
  background-color: ${props =>
    props.bookingStatus === 'booked'
      ? `${booked}`
      : props.bookingStatus === 'tentative'
      ? `${tentative}`
      : props.bookingStatus === 'unavailable'
      ? `${unavailable}`
      : `${declined}`};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
`;

export const GuestAndArrivalDateWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 8px;
  justify-content: space-between;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: ${props => (props.isBold ? '600' : '100')};
  color: ${props => (props.isBold ? `${boldText}` : `${regularText}`)};
`;

export const PropertyWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0 8px;
`;

export const StayInfoWrapper = styled.div`
  display: flex;
  padding: 0 8px;
`;

export const PaymentDue = styled.span`
  width: 70px;
  height: 22px;
  display: flex;
  margin-left: 90px;
  border-radius: 10px;
  justify-content: center;
  background-color: transparent;
  border: 1px solid ${searchPanelBottom};
`;
