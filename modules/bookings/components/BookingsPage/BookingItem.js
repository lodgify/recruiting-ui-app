import RepliedIcon from '../../../../static/reply.svg';
import NightIcon from '../../../../static/moon.svg';
import UserIcon from '../../../../static/user.svg';
import styles from '../../styles/BookingsPage/bookingItem.less';
import {calcTotalNights, formatShortDate} from '../../utils';

const BookingItem = ({booking}) => {
    const {dateArrival, dateCreated, dateDeparture, id, read, replied, status} = booking;

    const totalNights = calcTotalNights(new Date(dateArrival), new Date(dateDeparture));
    const dateArrivalFormat = formatShortDate(dateArrival);
    const itemClass = styles.item+(read ? '':' '+styles['item--read']);

    return (
        <div className={itemClass}>
            <div className={styles.item__icons}>
                <div className={styles.item__status+' '+styles[`item__status--${status}`]}/>
                {replied && <RepliedIcon className={styles.item__replied}/>}
            </div>
            <div className={styles.item__info}>
                <div className={styles.item__first}>
                    <span className={styles.item__guest}>{booking.guestName}</span>
                    <span className={styles.item__created}>{dateCreated.toLocaleDateString()}</span>
                </div>
                <div className={styles.item__second}>
                    <div className={styles.item__property}>{booking.propertyName}</div>
                </div>
                <div className={styles.item__third}>
                    <span className={styles.item__arrival}>{dateArrivalFormat}</span>
                    <span className={styles.item__nights}>{totalNights}</span>
                    <NightIcon className={styles.item__night}/>
                    <span className={styles.item__people}>{booking.people}</span>
                    <UserIcon className={styles.item__user}/>
                    <span className={styles.item__amount}>{booking.amountPaid} {booking.currencyCode}</span>
                </div>
            </div>
        </div>
    )
}

export default BookingItem;