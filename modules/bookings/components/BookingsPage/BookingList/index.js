import React from 'react';
import classNames from 'classnames';

import { MdUndo, MdPersonOutline,  } from 'react-icons/md';
import { FiMoon, FiRefreshCcw } from "react-icons/fi";

import styles from './styles.scss';

const resolveCc = currency => {
  if (currency.toLowerCase() === 'usd') {
    return '$'
  } else if (currency.toLowerCase() === 'eur') {
    return '€'
  } else if (currency.toLowerCase() === 'gbp') {
    return '£'
  }

  return currency
}

export const BookingList = ({...props}) => {
  const [active, setActive] = React.useState('')

  return (
    <>
      {props.data.map(booking => (
        <div key={booking.id}
          className={classNames(styles.ListItem, {
            [styles.active]: active === booking.id
          })}
          onClick={() => setActive(booking.id)}
        >
          {booking.status && (
            <i className={classNames(styles.status, styles[booking.status])} />
          )}

          {booking.replied && <MdUndo className={styles.replied} />}

          {booking.guestName && <span className={styles.name}>{booking.guestName}</span>}

          {booking.propertyName && <span className={styles.property}>{booking.propertyName}</span>}

          {!!booking.dateCreated && <span className={styles.created}>{booking.dateCreated.toLocaleDateString  ()}</span>}

          <div className={styles.dates}>
            {/* TOFIX */}
            {booking.dateArrival && <span>{booking.dateArrival.toDateString()},</span>}

            {/* TOFIX */}
            <span>
              {new Date(booking.dateDeparture.getTime() - booking.dateArrival.getTime()).getDay()}
              <FiMoon />
            </span>

            {booking.people && (
              <span>
                {booking.people}
                <MdPersonOutline />
              </span>
            )}
          </div>

          {booking.amountPaid && (
            <span className={styles.price}>
              {booking.amountPaid}
              {resolveCc(booking.currencyCode)}
            </span>
          )}

          {/* {booking.amountDue ? booking.amountDue : 'booking.amountDue'}
          {booking.read ? booking.read : 'booking.read'}
          {booking.totalAmount ? booking.totalAmount : 'booking.totalAmount'} */}
        </div>
      ))}
    </>
  )
}
export default BookingList
