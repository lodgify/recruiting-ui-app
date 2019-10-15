import React from 'react';
import styles from '../styles.css';
import { number, bool, string, func } from 'prop-types';
import StatusContainer from './StatusContainer';
import ItemFooter from './itemFooter';
import ItemHeader from './itemHeader';

function ReservationItem(props) {
  const {
    amountPaid,
    guestName,
    people,
    propertyName,
    replied,
    leftDays,
    statusColor,
    bookingDate,
    arrivalDate,
    isSelected,
    id,
  } = props;
  const activeStyle = {
    backgroundColor: isSelected ? 'white' : 'transparent',
  };

  function handleOnClick() {
    props.onSelectItem(id);
  }

  function getText(text) {
    const textLimit = 30;
    return text.length > textLimit ? text.slice(0, textLimit) + '...' : text;
  }

  return (
    <div
      onClick={handleOnClick}
      className={styles.listItemContainer}
      style={activeStyle}
    >
      <StatusContainer statusColor={statusColor} replied={replied} />
      <div className={styles.listItemBody}>
        <ItemHeader guestName={guestName} bookingDate={bookingDate} />
        <p className={styles.propertyName}>{getText(propertyName)}</p>
        <ItemFooter
          arrivalDate={arrivalDate}
          leftDays={leftDays}
          people={people}
          amountPaid={`$${amountPaid}`}
        />
      </div>
    </div>
  );
}

ReservationItem.propTypes = {
  leftDays: number.isRequired,
  statusColor: string.isRequired,
  bookingDate: string.isRequired,
  arrivalDate: string.isRequired,
  amountPaid: number.isRequired,
  guestName: string.isRequired,
  people: number.isRequired,
  propertyName: string.isRequired,
  replied: bool.isRequired,
  isSelected: bool.isRequired,
  id: string.isRequired,
  onSelectItem: func.isRequired,
};

export default ReservationItem;
