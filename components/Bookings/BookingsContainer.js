import { connect } from 'react-redux';

import { Bookings } from './Bookings';

import { onFetchBookings } from 'state/actions/actionCreators';

const mapStateToProps = state => ({
  bookings: state.bookingsReducer.bookings,
  isLoading: state.bookingsReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onFetchBookings() {
    dispatch(onFetchBookings());
  },
});

export const BookingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
