import BookingList from './BookingList';
import Search from '../Search';
import Actions from '../Actions';
import styles from '../../styles/BookingsPage/bookingSidebar.less';
import {texts} from '../../constants';
import {array} from 'prop-types';

const BookingSidebar = ({bookings}) => (
    <div className={styles.sidebar}>
        <Search/>
        <BookingList bookings={bookings}/>
        <Actions/>
        <div className={styles.sidebar__button}>{texts.button_create_booking}</div>
    </div>
)

BookingSidebar.propTypes = {
    bookings: array
}

export default BookingSidebar;
