import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducer as bookings } from '../modules/bookings';

export function initializeStore(initialState = {}) {
  return createStore(
    combineReducers({
      bookings,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
