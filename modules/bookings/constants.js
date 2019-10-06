import { object, oneOf, bool, string, number } from 'prop-types';

export const MODULE_NAME = 'bookings';

export const BookingStatus = Object.freeze({
  Booked: 'Booked',
  Declined: 'Declined',
  Unavailable: 'Unavailable',
  Tentative: 'Tentative',
  Open: 'Open',
});

export const Booking = {
  id: string.isRequired,
  dateCreated: object.isRequired,
  dateArrival: object.isRequired,
  dateDeparture: object.isRequired,
  status: oneOf([
    BookingStatus.Booked,
    BookingStatus.Declined,
    BookingStatus.Unavailable,
    BookingStatus.Tentative,
    BookingStatus.Open,
  ]).isRequired,
  replied: bool.isRequired,
  guestName: string.isRequired,
  propertyName: string.isRequired,
  people: number.isRequired,
  currencyCode: string.isRequired,
  amountPaid: number.isRequired,
};
