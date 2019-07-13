import React from 'react';
import PropTypes from 'prop-types';
import ItemRow from '../../common/ItemRow/ItemRow';
import Status from '../Status/Status';

const ListItem = ({ item, styles = '' }) => {
  return (
    <li>
      <Status status={item.status}>{item.status}</Status>
      <ItemRow className={styles.listTopRow}>{item.guestName}</ItemRow>
      <ItemRow className={styles.listTopRow}>{item.propertyName}</ItemRow>
      <ItemRow className={styles.listTopRow}>{item.guestName}</ItemRow>
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
