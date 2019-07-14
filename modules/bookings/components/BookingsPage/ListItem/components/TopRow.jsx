import React from 'react';
import PropTypes from 'prop-types';
// Components
import ItemRow from '../../../common/ItemRow/ItemRow';
import Status from '../../Status/Status';
// Helpers
import formatDate from '../../../../helpers/formatDate';

const TopRow = ({ status, guestName, styles = '', dateCreated }) => {
  const formattedDateCreated = formatDate(dateCreated, 'en-GB', true);
  return (
    <ItemRow className={styles}>
      <Status status={status}>{status}</Status>
      <article>
        <p>{guestName}</p>
        <p>{formattedDateCreated}</p>
      </article>
    </ItemRow>
  );
};

TopRow.propTypes = {
  guestName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default TopRow;
