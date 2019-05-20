import { fetchBookingsV2 as callFetchBookings } from '../api';
import { MODULE_NAME } from './constants';

export const DUCKS_NAME = 'bookings';

const actionTypes = {
  FETCH_BOOKINGS_START: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_START`,
  FETCH_BOOKINGS_SUCCESS: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_SUCCESS`,
  FETCH_BOOKINGS_FAILURE: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_FAILURE`,
};

const initialState = {
  isLoading: false,
  hasFailed: false,
  data: null,
};

export const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.FETCH_BOOKINGS_START) {
    return {
      ...state,
      isLoading: true,
      hasFailed: false,
      data: null,
    };
  }

  if (action.type === actionTypes.FETCH_BOOKINGS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      hasFailed: false,
      data: [...action.payload],
    };
  }

  return state;
};

export const fetchBookings = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.FETCH_BOOKINGS_START });
    const bookings = await callFetchBookings();
    const newBookings = bookings.map(booking => ({
        ...booking,
        status: booking.status.toLowercase(),
        dateArrival: booking.arriveAt,
        dateCreated: booking.createdAt,
        dateDeparture: booking.departAt,
        dateModified: booking.modifiedAt,
        guestName: booking.guest.name,
        people: booking.peopleCount,
        read: booking.wasRead,
        replied: booking.wasReplied
    }));

    dispatch({ type: actionTypes.FETCH_BOOKINGS_SUCCESS, payload: newBookings });
  } catch (e) {
    dispatch({ type: actionTypes.FETCH_BOOKINGS_FAILURE });
  }
};
