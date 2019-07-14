import React from 'react';
import PropTypes from 'prop-types';
// Components
import ItemRow from '../../../common/ItemRow/ItemRow';
import Moon from '../../../common/svg/Moon';
import Avatar from '../../../common/svg/Avatar';

const BottomRow = ({ arrivalDate, styles = '', people }) => {
  return (
    <ItemRow className={styles}>
      <span>{arrivalDate}</span>,<Moon width="10" height="14" />
      <span>{people}</span> <Avatar width="10" height="12" />
    </ItemRow>
  );
};

BottomRow.propTypes = {
  arrivalDate: PropTypes.string,
  people: PropTypes.number.isRequired,
};

export default BottomRow;
