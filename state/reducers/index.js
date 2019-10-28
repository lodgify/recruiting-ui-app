import { combineReducers } from 'redux';

import { bookingsReducer } from './bookingsReducer';

export const rootReducer = combineReducers({
  bookingsReducer,
});
