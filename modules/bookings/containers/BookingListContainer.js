import { connect } from 'react-redux';

import { fetchBookings } from '../../ducks';
import { BookingList } from './BookingList';

const mapStateToProps = state => ({
  isLoading: state.bookings.isLoading,
  hasFailed: state.bookings.hasFailed,
  data: state.bookings.data,
});

const mapDispathToProps = {
  fetchBookings,
};

const BookingListContainer = connect(
  mapStateToProps,
  mapDispathToProps,
)(BookingList);

export default BookingListContainer;