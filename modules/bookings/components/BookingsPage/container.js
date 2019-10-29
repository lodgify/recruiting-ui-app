import { connect } from 'react-redux';

import { fetchBookings, updateSearchKeyword } from '../../ducks';
import { Component } from './component';

const mapStateToProps = state => ({
  isLoading: state.bookings.isLoading,
  hasFailed: state.bookings.hasFailed,
  data: state.bookings.data,
  searchKeyword: state.bookings.searchKeyword
});

const mapDispathToProps = {
  fetchBookings,
  updateSearchKeyword,
};

export const Container = connect(
  mapStateToProps,
  mapDispathToProps,
)(Component);
