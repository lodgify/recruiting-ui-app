import React from 'react';
import PropTypes from 'prop-types';
// Components
import ItemRow from '../../../common/ItemRow/ItemRow';
import Moon from '../../../common/svg/Moon';
import Avatar from '../../../common/svg/Avatar';
import formatCurrency from '../.././../../helpers/formatCurrency';

const BottomRow = ({
  arrivalDate,
  days,
  people,
  amountPaid,
  currencyCode = 'USD',
  styles,
}) => {
  const formattedCurrency = formatCurrency(amountPaid, currencyCode);
  return (
    <ItemRow styles={styles.listBottomRow}>
      <article className={styles.bottomRowColumn}>
        <span className={styles.arrivalDate}>{arrivalDate}</span>,
        <span className={styles.arrivalDate}>{days}</span>
        <Moon width="10" height="14" />
        <span className={styles.people}>{people}</span>
        <Avatar width="10" height="12" />
      </article>
      <article className={styles.bottomRowColumnPill}>
        <span className={styles.pillButton}>{formattedCurrency}</span>
      </article>
    </ItemRow>
  );
};

BottomRow.propTypes = {
  arrivalDate: PropTypes.string,
  people: PropTypes.number.isRequired,
};

export default BottomRow;
