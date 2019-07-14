import React from 'react';
import PropTypes from 'prop-types';

const ItemRow = ({ item, styles = '', propertyId = '', children }) => {
  if (propertyId) {
    return (
      <article data-propertyid={propertyId} className={styles.itemRow}>
        {children}
      </article>
    );
  } else {
    return <article className={styles.itemRow}>{children}</article>;
  }
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
