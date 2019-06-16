import { fetchBookings as callFetchBookings } from '../../api';
import { MODULE_NAME } from '../constants';

export const DUCKS_NAME = 'bookings';

export const FETCH_BOOKINGS_START = `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_START`;
export const FETCH_BOOKINGS_SUCCESS = `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_SUCCESS`;
export const FETCH_BOOKINGS_FAILURE = `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_FAILURE`;

export const fetchBookings = () => async dispatch => {
  try {
    dispatch({ type: FETCH_BOOKINGS_START });
    const bookings = await callFetchBookings();
    dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: bookings });
  } catch (e) {
    dispatch({ type: FETCH_BOOKINGS_FAILURE, error: e });
  }
};
