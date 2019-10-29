import React from 'react';
import PropTypes from 'prop-types';

import { dateDiffByDay, dateFormatter } from '../../../utils/timeUtils';

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
// eslint-disable-next-line react/display-name
}) => WrappedComponent => {
  return (
    <WrappedComponent
      {...rest}
      key={rest.id}
      stayNights={dateDiffByDay(dateArrival, dateDeparture)}
      dateArrival={dateFormatter(dateArrival)}
      dateCreated={dateFormatter(dateCreated)}
      dateModified={dateFormatter(dateModified)}
    />
  );
};

withStringifiedDates.displayName = 'withStringifiedDates';
withStringifiedDates.propTypes = propTypes;

export default withStringifiedDates;
