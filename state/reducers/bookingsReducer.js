import { FETCH_BOOKINGS_SUCCESS } from 'state/actions/actionTypes';

const initialState = {
  bookings: [],
  isLoading: true,
};

export const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKINGS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        bookings: [...action.payload],
      };
    }
    default:
      return state;
  }
};
