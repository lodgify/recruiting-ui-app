import { arrayOf, shape, string, number, bool } from 'prop-types';

export const BookingProps = {
  guestName: string,
  amountPaid: number,
  currencyCode: string,
  propertyName: string,
  replied: bool,
  status: 'Booked' | 'Tentative' | 'Open' | 'Declined' | 'Unavailable',
  dateCreated: Date,
  dateArrival: Date,
  dateDeparture: Date,
};

export const BookingArrayProps = arrayOf(shape(BookingProps));

export const initialState = {
  isLoading: false,
  hasFailed: false,
  data: null,
};
