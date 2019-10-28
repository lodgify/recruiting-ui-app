import { string, bool, number, instanceOf } from 'prop-types';

import {
  SuperWrapper,
  StatusWrapper,
  StatusIcon,
  ContentWrapper,
  GuestAndArrivalDateWrapper,
  Text,
  PropertyWrapper,
  StayInfoWrapper,
  PaymentDue,
} from './styled';
import { MaterialIcon } from 'components/MaterialIcon';
import { searchIcon } from 'styles/colors';

export const BookingCard = ({
  bookingStatus,
  replyStatus,
  createdAt,
  guestName,
  propertyName,
  guestCount,
  bookingAmount,
  currencyCode,
}) => {
  return (
    <SuperWrapper>
      <StatusWrapper>
        <StatusIcon bookingStatus={bookingStatus} />
        {replyStatus && <MaterialIcon name="undo" size="tiny" color="red" style={{ paddingTop: '8px' }} />}
      </StatusWrapper>
      <ContentWrapper>
        <GuestAndArrivalDateWrapper>
          <Text isBold>{guestName}</Text>
          <Text>19/06/1982</Text>
        </GuestAndArrivalDateWrapper>
        <PropertyWrapper>
          <Text>{propertyName}</Text>
        </PropertyWrapper>
        <StayInfoWrapper>
          <Text>27 April 2020, 3</Text>
          <MaterialIcon name="nights_stay" size="tiny" color={searchIcon} style={{ margin: '2px 0 0 4px' }} />
          <Text>{guestCount}</Text>
          <MaterialIcon name="person" size="tiny" color={searchIcon} style={{ marginTop: '2px' }} />
          <PaymentDue>
            <Text>
              {bookingAmount} {currencyCode}
            </Text>
          </PaymentDue>
        </StayInfoWrapper>
      </ContentWrapper>
    </SuperWrapper>
  );
};

BookingCard.propTypes = {
  bookingStatus: string.isRequired,
  replyStatus: bool.isRequired,
  createdAt: instanceOf(Date),
  guestName: string.isRequired,
  propertyName: string.isRequired,
  guestCount: number.isRequired,
  bookingAmount: number.isRequired,
  currencyCode: string.isRequired,
};
