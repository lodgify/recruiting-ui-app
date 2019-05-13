import BookingItem from './BookingItem';
import styles from '../../styles/BookingsPage/bookingList.less';
import {array} from 'prop-types';

const BookingList = ({bookings}) => (
    <div className={styles.list}>
        {bookings && bookings.map(booking => 
            <BookingItem booking={booking} key={booking.id}/>)
        }
    </div>
)

BookingList.propTypes = {
    bookings: array
}

export default BookingList;
