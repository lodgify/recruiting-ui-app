import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';
import CalendarLogo from '../../../../static/calendar.svg';
import styles from './styles.scss';

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

    return (
      <div className={styles.GridContainer}>
        <GuestList users={this.props.data} />
        <MainPage />
      </div>
    );
  }
}


function MainPage() {

  return (
    <div className={styles.MainPage}>
      <CalendarLogo />
      <h1 className={styles.MainPage_Title}>Reservations</h1>
      <p>Select any reservation item</p>
    </div>
  )
}

function GuestList(props) {
  return (
    <div className={styles.Sidebar}>
      <div>
        {props.users.map((booking, i) => (<Reservation key={`item_${i}`} user={booking} />))}
      </div>
    </div>
  )
}

function Reservation(props) {
  console.log(props.user)
  return (
    <div className={styles.Reservation}>
      <div>
        <span className={styles.Reservation_GuestName}>{props.user.guestName}</span>
        <span className={styles.Reservation_BookingDate}>{props.user.dateCreated.toLocaleDateString()}</span>
      </div>
      <div>
        <span>{props.user.propertyName}</span>
      </div>
    </div>
  )
}