import React from 'react';
import PropTypes from 'prop-types';
// Components
import ItemRow from '../../../common/ItemRow/ItemRow';

const MidRow = ({ propertyId, styles = '', propertyName }) => {
  return (
    <ItemRow propertyId={propertyId} className={styles}>
      {propertyName}
    </ItemRow>
  );
};

MidRow.propTypes = {
  propertyId: PropTypes.string.isRequired,
  propertyName: PropTypes.string.isRequired,
};

export default MidRow;
