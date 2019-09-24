import { connect } from 'react-redux';
import { fetchBookings, filterBookings } from '../ducks';
import { Component } from '../components/BookingsPage/component';

const mapStateToProps = state => ({
  isLoading: state.bookings.isLoading,
  hasFailed: state.bookings.hasFailed,
  data: state.bookings.data,
  filteredData: state.bookings.filteredData
});

const mapDispatchToProps = {
  fetchBookings,
  filterBookings
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
