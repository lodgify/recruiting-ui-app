import BookingItem from './BookingItem';
import Search from '../Search';
import Actions from '../Actions';
import styles from '../../styles/BookingsPage/bookingList.less';
import {texts} from '../../constants';

const BookingList = ({bookings}) => (
    <div className={styles.list}>
        <div className={styles.list__search}>
            <Search/>
        </div>
        <div className={styles.list__items}>
            {bookings && bookings.map(booking => 
                <BookingItem booking={booking} key={booking.id}/>)
            }
        </div>
        <div className={styles.list__actions}>
            <Actions/>
        </div>
        <div className={styles.list__button}>{texts.button_create_booking}</div>
    </div>
)
export default BookingList;