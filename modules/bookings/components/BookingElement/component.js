import React from 'react';
import { string, number, bool } from 'prop-types';
import PropTypes from 'prop-types';

import BookingStatuses from './BookingStatuses';
import GuestInformation from './GuestInformation';
import DateCreationAndPaidAmount from './DateCreationAndPaidAmount';
import styled from 'styled-components';

const BookingElementWrapper = styled.div`
  display: flex;
  border-bottom: #dfdfdb 1px solid;
  padding: 20px;
  color: #848484;
  :hover {
    background-color: #fff;
    transition: all 0.4s;
  }
`;

const BookingElement = ({
  guestName,
  propertyName,
  replied,
  dateCreated,
  people,
  amountPaid,
  dateArrival,
  dateDeparture,
  status,
  currencyCode,
}) => {
  return (
    <BookingElementWrapper>
      <BookingStatuses status={status} replied={replied} />
      <GuestInformation
        guestName={guestName}
        propertyName={propertyName}
        dateArrival={dateArrival}
        dateDeparture={dateDeparture}
        people={people}
      />
      <DateCreationAndPaidAmount
        amountPaid={amountPaid}
        currencyCode={currencyCode}
        dateCreated={dateCreated}
      />
    </BookingElementWrapper>
  );
};

BookingElement.propTypes = {
  guestName: string,
  propertyName: string,
  replied: bool,
  dateArrival: PropTypes.instanceOf(Date),
  people: number,
  dateDeparture: PropTypes.instanceOf(Date),
  amountPaid: number,
  dateCreated: PropTypes.instanceOf(Date),
  currencyCode: string,
  status: string,
};

export default BookingElement;
