import { SLEEP_DURATION } from '../constants';
import faker from 'faker';

export const fetchBookings = async () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(new Array(30).fill(null).map(generateBooking));
    }, SLEEP_DURATION);
  });

const generateBooking = () => {
  const amountDue = Number.parseFloat(faker.commerce.price());
  const amountPaid = Number.parseFloat(faker.commerce.price());

  return {
    amountDue,
    amountPaid,
    currencyCode: 'USD',
    dateArrival: faker.date.recent(),
    dateCreated: faker.date.past(),
    dateDeparture: faker.date.future(),
    dateModified: faker.date.recent(),
    guestName: faker.name.findName(),
    id: faker.random.uuid(),
    people: faker.random.number({ min: 1, max: 4 }),
    propertyId: faker.random.uuid(),
    propertyName: faker.commerce.productName(),
    read: true,
    replied: true,
    status: faker.random.arrayElement([
      'Booked',
      'Unavailable',
      'Tentative',
      'Open',
      'Declined',
    ]),
    totalAmount: amountDue + amountPaid,
  };
};
