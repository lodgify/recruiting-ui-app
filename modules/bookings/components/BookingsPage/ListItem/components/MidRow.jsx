import React from 'react';
import PropTypes from 'prop-types';
// Components
import ItemRow from '../../../common/ItemRow/ItemRow';
import Reply from '../../../common/svg/Reply';

const WasReplied = ({ styles, replied }) => {
  if (replied) {
    return (
      <span className={styles}>
        <Reply height="14" />
      </span>
    );
  } else {
    return null;
  }
};

const MidRow = ({ propertyId, propertyName, replied, styles }) => {
  return (
    <ItemRow
      propertyId={propertyId}
      styles={replied ? styles.listMidRowReplied : styles.listMidRow}
    >
      <>
        <WasReplied styles={styles.replied} replied={replied} />
        {propertyName}
      </>
    </ItemRow>
  );
};

MidRow.propTypes = {
  propertyId: PropTypes.string.isRequired,
  propertyName: PropTypes.string.isRequired,
};

export default MidRow;
