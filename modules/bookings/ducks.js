import { fetchBookings as callFetchBookings } from '../api';
import { MODULE_NAME } from './constants';

export const DUCKS_NAME = 'bookings';

const actionTypes = {
  FETCH_BOOKINGS_START: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_START`,
  FETCH_BOOKINGS_SUCCESS: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_SUCCESS`,
  FETCH_BOOKINGS_FAILURE: `${MODULE_NAME}/${DUCKS_NAME}/FETCH_BOOKINGS_FAILURE`,
  UPDATE_SEARCH_TERM: `${MODULE_NAME}/${DUCKS_NAME}/UPDATE_SEARCH_TERM`,
};

const initialState = {
  isLoading: false,
  hasFailed: false,
  data: null,
  searchTerm: '',
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

  if (action.type === actionTypes.UPDATE_SEARCH_TERM) {
    return {
      ...state,
      searchTerm: action.payload,
    };
  }

  return state;
};

export const fetchBookings = () => async dispatch => {
  try {
    dispatch({ type: actionTypes.FETCH_BOOKINGS_START });
    const bookings = await callFetchBookings();
    dispatch({ type: actionTypes.FETCH_BOOKINGS_SUCCESS, payload: bookings });
  } catch (e) {
    dispatch({ type: actionTypes.FETCH_BOOKINGS_FAILURE });
  }
};

export const updateSearchTerm = value => async dispatch => {
  dispatch({ type: actionTypes.UPDATE_SEARCH_TERM, payload: value });
};
