import React from 'react';
import { func, bool, arrayOf, shape, string, number } from 'prop-types';
import PropTypes from 'prop-types';

import CalendarLogo from '../../../../static/calendar.svg';
import BookingElement from '../BookingElement/component';
import { FiDownload, FiRefreshCcw } from 'react-icons/fi';
import Search from './Search';
import {
  BookingPageWrapper,
  ListComponentWrapper,
  BookingListWrapper,
  FooterWrapper,
  ActionsWrapper,
  LogoWrapper,
  ButtonWrapper,
} from './wrappers';

export class Component extends React.PureComponent {
  state = {
    filter: '',
  };
  static displayName = 'BookingsPage';
  static propTypes = {
    fetchBookings: func.isRequired,
    isLoading: bool,
    hasFailed: bool,
    data: arrayOf(
      shape({
        guestName: string,
        propertyName: string,
        replied: bool,
        dateArrival: PropTypes.instanceOf(Date),
        people: number,
        dateDeparture: PropTypes.instanceOf(Date),
        amountPaid: number,
        dateCreated: PropTypes.instanceOf(Date),
        currencyCode: string,
        status: string,
      }),
    ),
  };

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    const { filter } = this.state;
    const onChange = e => this.setState({ filter: e.target.value });
    if (this.props.isLoading) return 'Loading…';
    if (this.props.hasFailed || !this.props.data) return 'Failed :(';
    const filteredResults = this.props.data.filter(
      ({ guestName }) =>
        guestName.toLowerCase().indexOf(filter.toLowerCase()) !== -1,
    );

    return (
      <BookingPageWrapper>
        <ListComponentWrapper>
          <Search onChange={onChange} />
          <BookingListWrapper>
            {filteredResults.map(booking => (
              <BookingElement key={booking.id} {...booking} />
            ))}
          </BookingListWrapper>
          <FooterWrapper>
            <ActionsWrapper>
              Select
              <FiDownload />
              <FiRefreshCcw />
            </ActionsWrapper>
            <ButtonWrapper>CREATE BOOKING</ButtonWrapper>
          </FooterWrapper>
        </ListComponentWrapper>
        <LogoWrapper>
          <CalendarLogo />
          <span className="title">Reservations</span>
          <p className="text">Select any reservation item</p>
          <ButtonWrapper
            backgroundColor={'#f0f0ed'}
            border={'1px solid grey'}
            width={'260px'}
          >
            Create Booking
          </ButtonWrapper>
          <ButtonWrapper
            backgroundColor={'#f0f0ed'}
            border={'1px solid grey'}
            width={'260px'}
          >
            Create Booking with Quote
          </ButtonWrapper>
        </LogoWrapper>
      </BookingPageWrapper>
    );
  }
}
