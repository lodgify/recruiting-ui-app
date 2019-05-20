import BookingListContainer from './BookingListContainer';
import BookingListActions from './BookingListActions';
import Search from '../Search';
import styles from '../../styles/BookingsPage/bookingSidebar.less';
import {texts} from '../../constants';

const BookingSidebar = () => (
    <div className={styles.sidebar}>
        <Search/>
        <BookingListContainer/>
        <BookingListActions/>
        <div className={styles.sidebar__button}>{texts.button_create_booking}</div>
    </div>
)

export default BookingSidebar;
