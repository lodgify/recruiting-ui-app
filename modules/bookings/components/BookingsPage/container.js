import { connect } from 'react-redux';
import { fetchBookings } from '../../ducks';
import { Component } from './component';

const mapStateToProps = state => ({
  isLoading: state.bookings.isLoading,
  hasFailed: state.bookings.hasFailed,
  data: state.bookings.data,
});

const mapDispathToProps = {
  fetchBookings,
};

export const Container = connect(
  mapStateToProps,
  mapDispathToProps,
)(Component);
