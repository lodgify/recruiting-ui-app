import { useState } from 'react';
import { bool, arrayOf, shape, number, instanceOf, string } from 'prop-types';

import { Text } from 'components/BookingCard/styled';
import { BookingCard } from 'components/BookingCard';
import { MaterialIcon } from 'components/MaterialIcon';
import {
  SearchPanelWrapper,
  SearchBoxWrapper,
  InputWrapper,
  Input,
  ResultsWrapper,
  BookingButton,
  Image,
  OptionsAndButtonWrapper,
} from './styled';

import { searchIcon } from 'styles/colors';
import reloadIcon from 'public/images/reload.svg';
import downloadIcon from 'public/images/download.svg';

export const SearchPanel = ({ bookings }) => {
  const [guestName, setGuestName] = useState('');

  const filteredBookings = bookings
    .map(booking => booking)
    .filter(booking => booking.guest.name.toLowerCase().indexOf(guestName) !== -1);

  return (
    <SearchPanelWrapper>
      <SearchBoxWrapper>
        <InputWrapper>
          <Input
            type="search"
            placeholder="Search"
            value={guestName}
            onChange={event => setGuestName(event.target.value)}
          />
          <MaterialIcon name="search" color={searchIcon} style={{ position: 'absolute', right: '10px', top: '8px' }} />
        </InputWrapper>
        <MaterialIcon name="filter_list" color={searchIcon} style={{ paddingLeft: '16px' }} />
      </SearchBoxWrapper>
      <ResultsWrapper>
        {filteredBookings &&
          filteredBookings.map(booking => {
            return (
              <BookingCard
                key={booking.id}
                bookingStatus={booking.status}
                replyStatus={booking.wasReplied}
                createdAt={booking.createdAt}
                guestName={booking.guest.name}
                propertyName={booking.propertyName}
                guestCount={booking.peopleCount}
                bookingAmount={booking.totalAmount}
                currencyCode={booking.currencyCode}
              />
            );
          })}
      </ResultsWrapper>
      <OptionsAndButtonWrapper>
        <Text isBold>Select</Text>
        <Image src={downloadIcon} />
        <Image src={reloadIcon} />
      </OptionsAndButtonWrapper>
      <OptionsAndButtonWrapper>
        <BookingButton>Create booking</BookingButton>
      </OptionsAndButtonWrapper>
    </SearchPanelWrapper>
  );
};

SearchPanel.propTypes = {
  bookings: arrayOf(
    shape({
      amountDue: number,
      amountPaid: number,
      arriveAt: instanceOf(Date),
      createdAt: instanceOf(Date),
      currencyCode: string,
      departAt: instanceOf(Date),
      guest: shape({
        name: string,
      }),
      id: string,
      modifiedAt: instanceOf(Date),
      peopleCount: number,
      propertyId: string,
      propertyName: string,
      status: string,
      totalAmount: number,
      wasRead: bool,
      wasReplied: bool,
    }).isRequired
  ),
};
