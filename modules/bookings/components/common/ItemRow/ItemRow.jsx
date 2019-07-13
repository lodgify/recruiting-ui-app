import React from 'react';
import PropTypes from 'prop-types';

const ItemRow = ({ item, styles = '', children }) => {
  return <article className={styles.itemRow}>{children}</article>;
};

ItemRow.propTypes = {
  item: PropTypes.shape({
    fullName: PropTypes,
    dateBooked: PropTypes.string.isRequired,
    datetoStay: PropTypes.string.isRequired,
    nightsBooked: PropTypes.number.isRequired,
    people: PropTypes.number.isRequired,
  }),
};

export default ItemRow;
