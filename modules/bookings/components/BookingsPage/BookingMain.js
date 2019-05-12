import CalendarLogo from '../../../../static/calendar.svg';
import styles from '../../styles/BookingsPage/bookingMain.less';
import {texts} from '../../constants';

const BookingMain = () => (
    <div className={styles.main}>
        <CalendarLogo className={styles.main__logo}/><br/>
        <div className={styles.main__title}>{texts.booking_title}</div>
        <div className={styles.main__subtitle}>{texts.booking_subtitle}</div>
        <div className={styles.main__button}>{texts.booking_button}</div>
        <div className={styles.main__button}>{texts.booking_button_quote}</div>
    </div>
)

export default BookingMain;