import { connect } from 'react-redux';
import { fetchBookings } from '../../ducks';
import { Component } from './component';

const mapStateToProps = state => ({
  isLoading: state.bookings.isLoading,
  hasFailed: state.bookings.hasFailed,
  data: state.bookings.data,
});

const mapDispatchToProps = {
  fetchBookings,
};

export const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
