import { SLEEP_DURATION } from './constants';
import faker from 'faker';

export const fetchBookings = async () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(new Array(500).fill(null).map(generateBooking));
    }, SLEEP_DURATION);
  });

const generateBooking = () => {
  const amountDue = Number.parseFloat(faker.commerce.price());
  const amountPaid = Number.parseFloat(faker.commerce.price());

  return {
    amountDue,
    amountPaid,
    arriveAt: faker.date.future(),
    createdAt: faker.date.past(),
    currencyCode: 'USD',
    departAt: faker.date.future(),
    guest: { name: faker.name.findName() },
    id: faker.random.uuid(),
    modifiedAt: faker.date.recent(),
    peopleCount: faker.random.number({ min: 1, max: 4 }),
    propertyId: faker.random.uuid(),
    propertyName: faker.commerce.productName(),
    status: faker.random.arrayElement(['booked', 'unavailable', 'tentative', 'open', 'declined']),
    totalAmount: amountDue + amountPaid,
    wasRead: true,
    wasReplied: true,
  };
};
