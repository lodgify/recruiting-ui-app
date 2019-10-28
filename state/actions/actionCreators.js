import { FETCH_BOOKINGS_REQUEST, FETCH_BOOKINGS_SUCCESS, FETCH_BOOKINGS_FAILURE } from './actionTypes';

export const onFetchBookings = () => ({ type: FETCH_BOOKINGS_REQUEST });
export const onFetchBookingsSuccess = payload => ({ type: FETCH_BOOKINGS_SUCCESS, payload });
export const onFetchBookingsFailure = payload => ({ type: FETCH_BOOKINGS_FAILURE, payload });
