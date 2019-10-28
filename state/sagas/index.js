import { all } from 'redux-saga/effects';

import { fetchBookingsWatcher } from './bookingsSaga';

export function* rootSaga() {
  yield all([fetchBookingsWatcher()]);
}
