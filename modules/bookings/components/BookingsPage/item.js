import styles from './styles.css';
import RepliedIcon from '../../../../static/replied.svg';
import MoonIcon from '../../../../static/moon.svg';
import PeopleIcon from '../../../../static/profile.svg';

export default function(props) {
  return (
    <div className={styles.Item}>
      <div className={styles.ItemLeft}>
        <div className={styles.Status + ' ' + styles[props.booking.status]} />
        {props.booking.replied ? <RepliedIcon className={styles.RepliedIcon} /> : null}
      </div>
      <div className={styles.ItemContent}>
        <strong>{props.booking.guestName}</strong>
        <span className={styles.Date}>
          {props.booking.dateCreated.toLocaleDateString('en-US')}
        </span>
        <div>{props.booking.propertyName}</div>
        <div className={styles.ItemBottom}>
          {props.booking.dateArrival.toLocaleDateString()}, {parseInt((props.booking.dateDeparture.getTime() - props.booking.dateArrival.getTime())/(24*3600*1000))} <MoonIcon />, {props.booking.people} <PeopleIcon />
        </div>
          {props.booking.currencyCode && props.booking.amountPaid?
          <div className={styles.Price}>
            {props.booking.amountPaid} {props.booking.currencyCode}
          </div>:null}
      </div>
    </div>
  );
}
