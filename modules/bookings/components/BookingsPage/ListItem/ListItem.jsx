import React from 'react';
import PropTypes from 'prop-types';
// Components
import TopRow from './components/TopRow';
import MidRow from './components/MidRow';
import BottomRow from './components/BottomRow';
// Helpers
import formatDate from '../../../helpers/formatDate';

const ListItem = ({ item, styles = '' }) => {
  const arrivalDate = formatDate(item.dateArrival);
  return (
    <li>
      <TopRow
        status={item.status}
        guestName={item.guestName}
        dateCreated={item.dateCreated}
        styles={styles.listTopRow}
      />
      <MidRow
        propertyId={item.propertyId}
        propertyName={item.propertyName}
        styles={styles.listTopRow}
      />
      <BottomRow
        arrivalDate={arrivalDate}
        people={item.people}
        styles={styles.listBottomRow}
      />
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    amountDue: PropTypes.number.isRequired,
    amountPaid: PropTypes.number.isRequired,
    currencyCode: PropTypes.string.isRequired,
    dateArrival: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    dateDeparture: PropTypes.string.isRequired,
    dateModified: PropTypes.string.isRequired,
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
