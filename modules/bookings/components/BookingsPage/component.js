import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';
// Components
import CalendarLogo from '../../../../static/calendar.svg';
import BookingList from './BookingList/BookingList';
import Title from './Title/Title';
import styles from './styles.css';

export class Component extends React.PureComponent {
  static displayName = 'BookingsPage';
  static propTypes = {
    fetchBookings: func.isRequired,
    isLoading: bool,
    hasFailed: bool,
    data: arrayOf(shape({ guestName: string })),
  };

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    if (this.props.isLoading) return 'Loading…';
    if (this.props.hasFailed || !this.props.data) return 'Failed :(';

    const { data } = this.props;

    return (
      <>
        <Title styles={styles.Title} text="Welcome!" />
        <CalendarLogo />
        <BookingList data={data} />
      </>
    );
  }
}
