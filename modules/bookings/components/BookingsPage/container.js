import { connect } from 'react-redux';

import { fetchBookings, updateSearchTerm } from '../../ducks';
import { Component } from './component';

const mapStateToProps = state => ({
  isLoading: state.bookings.isLoading,
  hasFailed: state.bookings.hasFailed,
  data: state.bookings.data,
  searchTerm: state.bookings.searchTerm
});

const mapDispathToProps = {
  fetchBookings,
  updateSearchTerm,
};

export const Container = connect(
  mapStateToProps,
  mapDispathToProps,
)(Component);
