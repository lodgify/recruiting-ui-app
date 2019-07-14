import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';
// Components
import BookingList from './BookingList/BookingList';
import Main from '../common/Main/Main';
import Wrapper from '../common/Wrapper/Wrapper';
import CalendarSection from './CalendarSection/CalendarSection';

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
      <Main>
        <Wrapper>
          <BookingList data={data} />
        </Wrapper>
        <CalendarSection />
      </Main>
    );
  }
}
