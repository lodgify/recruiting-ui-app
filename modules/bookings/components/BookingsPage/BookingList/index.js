import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

import { MdUndo, MdPersonOutline,} from 'react-icons/md';
import { FiMoon, FiRefreshCcw, FiDownload, FiFilter } from "react-icons/fi";

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

export const BookingList = React.memo(({ ...props }) => {
  const [active, setActive] = React.useState('')
  const [value, setValue] = React.useState('')

  const filtered = props.data.filter(i => i.guestName.toLowerCase().indexOf(value.toLowerCase()) !== -1);

  return (
    <div className={styles.ListWrapper}>
      <div className={styles.Filter}>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='Search'
        />
        <FiFilter />
      </div>

      <div className={styles.List}>
        <>
          {filtered.map(booking => (
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

              {!!booking.dateCreated && <span className={styles.created}>
                {moment(booking.dateCreated).format("DD/MM/YYYY")}
              </span>}

              <div className={styles.dates}>
                {booking.dateArrival && <span>{moment(booking.dateArrival).format("MMMM DD YYYY")},</span>}

                <span>
                  {moment(booking.dateArrival).diff(booking.dateDeparture, 'days')}
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
            </div>
          ))}
        </>
      </div>

      <div className={styles.actions}>
        <div className={styles.selected}>
          <span>Select</span>
          <FiDownload />
          <FiRefreshCcw />
        </div>

        <div className={styles.create}>
          <button>create booking</button>
        </div>
      </div>
    </div>
  )
})
export default BookingList
