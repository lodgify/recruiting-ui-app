import { useEffect } from 'react';
import { func, bool, arrayOf, shape, string, number, instanceOf } from 'prop-types';

import { MainLayout } from 'layouts/MainLayout';
import { SearchPanel } from 'components/SearchPanel';
import { Section, Row, Column } from 'components/Layout';
import { BookingImage, Title, Subtitle, Button } from './styled';

import bookingCalendar from 'public/images/calendar.svg';

export const Bookings = ({ isLoading, bookings, onFetchBookings }) => {
  useEffect(() => {
    if (onFetchBookings) {
      onFetchBookings();
    }
  }, [onFetchBookings]);

  return (
    <MainLayout>
      {isLoading || !bookings ? (
        <p>Loading</p>
      ) : (
        <Section full>
          <Row>
            <Column size={3}>
              <SearchPanel bookings={bookings} />
            </Column>
            <Column size={9} align="center" justify="center" marginTop={150}>
              <BookingImage src={bookingCalendar} />
              <Title>Reservations</Title>
              <Subtitle>Select any reservation item</Subtitle>
              <Button>Create Booking</Button>
              <Button>Create Booking with Quote</Button>
            </Column>
          </Row>
        </Section>
      )}
    </MainLayout>
  );
};

Bookings.propTypes = {
  isLoading: bool.isRequired,
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
  onFetchBookings: func.isRequired,
};
