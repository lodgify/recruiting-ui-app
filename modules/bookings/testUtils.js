import { BookingStatus } from './constants';

export const mockBooking = id => ({
  id: 'id' + id,
  dateCreated: new Date(),
  dateArrival: new Date(),
  dateDeparture: new Date(),
  status: BookingStatus.Booked,
  replied: true,
  guestName: 'Nic Cage',
  propertyName: 'The White House',
  people: 1337,
  currencyCode: 'USD',
  amountPaid: 9999,
});
