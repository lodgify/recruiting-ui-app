import React from 'react';
import PropTypes from 'prop-types';
// Components
import TopRow from './components/TopRow';
import MidRow from './components/MidRow';
import BottomRow from './components/BottomRow';
// Helpers
import formatDate from '../../../helpers/formatDate';
import differenceInDays from '../../../helpers/differenceInDays';
// CSS
import styles from './item.css';

const ListItem = ({ item, isFirst }) => {
  const arrivalDate = formatDate(item.dateArrival);
  const days = differenceInDays(item.dateDeparture, item.dateArrival);
  return (
    <li className={isFirst ? styles.listItemFirst : styles.listItem}>
      <TopRow
        status={item.status}
        guestName={item.guestName}
        dateCreated={item.dateCreated}
        styles={styles}
      />
      <MidRow
        propertyId={item.propertyId}
        propertyName={item.propertyName}
        replied={item.replied}
        styles={styles}
      />
      <BottomRow
        arrivalDate={arrivalDate}
        days={days}
        people={item.people}
        amountPaid={item.amountPaid}
        currencyCode={item.currencyCode}
        styles={styles}
      />
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    amountDue: PropTypes.number.isRequired,
    amountPaid: PropTypes.number.isRequired,
    currencyCode: PropTypes.string.isRequired,
    guestName: PropTypes.string,
    id: PropTypes.string,
    people: PropTypes.number.isRequired,
    propertyId: PropTypes.string.isRequired,
    propertyName: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    replied: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    totalAmount: PropTypes.number.isRequired,
  }),
};

export default ListItem;
