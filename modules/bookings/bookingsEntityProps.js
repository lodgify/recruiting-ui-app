import { arrayOf, shape, string, number, bool } from 'prop-types';

export const BookingsProps = {
  status: 'Booked' | 'Tentative' | 'Open' | 'Declined' | 'Unavailable',
  guestName: string,
  people: number,
  propertyName: string,
  dateCreated: Date,
  dateArrival: Date,
  dateDeparture: Date,
  replied: bool,
  amountPaid: number,
};

export const BookingsEntityProps = arrayOf(shape(BookingsProps));
