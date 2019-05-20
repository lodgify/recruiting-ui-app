import React from 'react';
import BookingItem from './BookingItem';
import styles from '../../styles/BookingsPage/bookingList.less';
import { func, bool, arrayOf, shape, string } from 'prop-types';

export class BookingList extends React.PureComponent {
    static displayName = 'BookingsList';
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
        const {isLoading, hasFailed, data} = this.props;
        if (isLoading) return (
                <div className={styles.list+' '+styles[`list-loading`]}>
                    Loading…
                </div>
        );

        if (hasFailed || !data) return (
            <div className={styles.list+' '+styles[`list-failed`]}>
                Failed :(
            </div>
        );

        return (
            <div className={styles.list}>
                {data && data.map(booking => 
                    <BookingItem booking={booking} key={booking.id}/>)
                }
            </div>
        );
    }
}
