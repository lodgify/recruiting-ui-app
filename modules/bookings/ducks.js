import { fetchBookings as callFetchBookings } from '../api';
import { MODULE_NAME } from './constants';

export const DUCKS_NAME = 'bookings';

export const actionTypes = {
  FETCH_BOOKINGS_START: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_START`,
  FETCH_BOOKINGS_SUCCESS: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_SUCCESS`,
  FETCH_BOOKINGS_FAILURE: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_FAILURE`,
  FILTER_BOOKINGS: `${MODULE_NAME}/${DUCKS_NAME}/FILTER_BOOKINGS`,
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
      filteredData: null
    };
  }

  if (action.type === actionTypes.FETCH_BOOKINGS_SUCCESS || action.type === actionTypes.FILTER_BOOKINGS) {
    console.log(action.type)
    return {
      ...state,
      isLoading: false,
      hasFailed: false,
      data: [...action.payload.bookings],
      filteredData: [...action.payload.filtered]
    };
  }

  return state;
};

export const fetchBookings = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.FETCH_BOOKINGS_START });
    const bookings = await callFetchBookings();
    dispatch({ type: actionTypes.FETCH_BOOKINGS_SUCCESS, payload: {bookings: bookings, filtered: bookings }});
  } catch (e) {
    dispatch({ type: actionTypes.FETCH_BOOKINGS_FAILURE });
  }
};

export const filterBookings = (bookings, filteredGuest) => async dispatch => {
  try {
    let searchResult = [...bookings]
    let regExp = new RegExp(`.*${filteredGuest}.*`, 'i')
    if (filteredGuest.length > 0) {
      searchResult = bookings.filter((user) => user.guestName.match(regExp))
    }
    dispatch({ type: actionTypes.FILTER_BOOKINGS, payload: {bookings: bookings, filtered:searchResult }})
  } catch (e) {
    console.log('error')
  }
}
