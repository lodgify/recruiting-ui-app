import React from 'react';
import PropTypes from 'prop-types';
// Components
import ItemRow from '../../../common/ItemRow/ItemRow';
import Status from '../../Status/Status';
// Helpers
import formatDate from '../../../../helpers/formatDate';

const TopRow = ({ status, guestName, dateCreated, styles }) => {
  const formattedDateCreated = formatDate(dateCreated, 'en-GB', true);
  return (
    <ItemRow styles={styles.listTopRow}>
      <Status status={status}>{status}</Status>
      <p className={styles.guestName}>{guestName}</p>
      <p className={styles.date}>{formattedDateCreated}</p>
    </ItemRow>
  );
};

TopRow.propTypes = {
  guestName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default TopRow;
