import React from 'react';
import PropTypes from 'prop-types';
import ItemRow from '../../common/ItemRow/ItemRow';
import Moon from '../../common/svg/Moon';
import Avatar from '../../common/svg/Avatar';
import Status from '../Status/Status';
// Helpers
import formatDate from '../../../helpers/formatDate';

const ListItem = ({ item, styles = '' }) => {
  const arrivalDate = formatDate(item.dateArrival);
  return (
    <li>
      <Status status={item.status}>{item.status}</Status>
      <ItemRow className={styles.listTopRow}>{item.guestName}</ItemRow>
      <ItemRow propertyId={item.propertyId} className={styles.listTopRow}>
        {item.propertyName}
      </ItemRow>
      <ItemRow className={styles.listTopRow}>
        <span>{arrivalDate}</span>,<Moon width="10" height="14" />
        <span>{item.people}</span> <Avatar width="10" height="12" />
      </ItemRow>
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
