import { call, put, takeLatest } from 'redux-saga/effects';

import * as api from '/api';
import { FETCH_BOOKINGS_REQUEST } from 'state/actions/actionTypes';
import { onFetchBookingsSuccess, onFetchBookingsFailure } from 'state/actions/actionCreators';

function* fetchBookings() {
  try {
    const response = yield call(api.fetchBookings);
    yield put(onFetchBookingsSuccess(response));
  } catch (error) {
    yield put(onFetchBookingsFailure(error));
  }
}

export function* fetchBookingsWatcher() {
  yield takeLatest(FETCH_BOOKINGS_REQUEST, fetchBookings);
}
