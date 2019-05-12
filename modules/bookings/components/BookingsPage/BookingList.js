import SearchIcon from '../../../../static/search.svg';
import FilterIcon from '../../../../static/chemistry-filter.svg';
import DownloadIcon from '../../../../static/download-arrow.svg';
import RefreshIcon from '../../../../static/refresh.svg';
import BookingItem from './BookingItem';
import styles from '../../styles/BookingsPage/bookingList.less';
import {texts} from '../../constants';

const BookingList = ({bookings}) => (
    <div className={styles.list}>
        <div className={styles.list__search}>
            <input className={styles.list__input} placeholder={texts.search}/>
            <SearchIcon className={styles.list__icon}/>
            <FilterIcon className={styles.list__filter}/>
        </div>
        <div className={styles.list__items}>
            {bookings && bookings.map(booking => 
                <BookingItem booking={booking} key={booking.id}/>)
            }
        </div>
        <div className={styles.list__actions}>
            <span className={styles.list__select}>{texts.select}</span>
            <DownloadIcon className={styles.list__download}/>
            <RefreshIcon className={styles.list__refresh}/>
        </div>
        <div className={styles.list__button}>{texts.button_create_booking}</div>
    </div>
)

export default BookingList;