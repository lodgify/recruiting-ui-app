import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import { dateFormatter } from '../../../utils/timeUtils';

const propTypes = {
  dateArrival: PropTypes.object,
  dateCreated: PropTypes.object,
  dateDeparture: PropTypes.object,
  dateModified: PropTypes.object,
};

const withStringifiedDates = ({
  dateArrival,
  dateCreated,
  dateDeparture,
  dateModified,
  ...rest
}) => WrappedComponent => {
  return (
    <WrappedComponent
      {...rest}
      key={rest.id}
      dateArrival={dateFormatter(dateArrival)}
      dateCreated={dateFormatter(dateCreated)}
      dateDeparture={dateFormatter(dateDeparture)}
      dateModified={dateFormatter(dateModified)}
    />
  );
};

withStringifiedDates.displayName = 'withStringifiedDates';
withStringifiedDates.propTypes = propTypes;

export default withStringifiedDates;
