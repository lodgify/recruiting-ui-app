import React from 'react';
import { string, number } from 'prop-types';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import BookingDetails from './BookingDetails';

const GuestNameWrapper = styled.div`
  width: 250px;
  font-size: 14px;
  .guestName {
    font-weight: 500;
  }
  .propertyName {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 5px;
  }
`;

const GuestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

const GuestInformation = ({
  guestName,
  propertyName,
  dateArrival,
  dateDeparture,
  people,
}) => {
  return (
    <GuestWrapper>
      <GuestNameWrapper>
        <div className="guestName">{guestName}</div>
        <div className="propertyName">{propertyName}</div>
      </GuestNameWrapper>
      <BookingDetails
        dateArrival={dateArrival}
        dateDeparture={dateDeparture}
        people={people}
      />
    </GuestWrapper>
  );
};

GuestInformation.propTypes = {
  guestName: string,
  propertyName: string,
  dateArrival: PropTypes.instanceOf(Date),
  dateDeparture: PropTypes.instanceOf(Date),
  people: number,
};

export default GuestInformation;
