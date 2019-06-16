import {
  FETCH_BOOKINGS_START,
  FETCH_BOOKINGS_SUCCESS,
  FETCH_BOOKINGS_FAILURE,
} from './actions';
import { initialState } from './state';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKINGS_START:
      return {
        ...state,
        isLoading: true,
        hasFailed: false,
        data: null,
      };

    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasFailed: false,
        data: action.payload.sort((a, b) => b.dateCreated - a.dateCreated),
      };

    case FETCH_BOOKINGS_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasFailed: true,
        error: action.error,
        data: null,
      };
    default:
      return state;
  }
};
