import React from 'react';
import { number } from 'prop-types';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { FiMoon, FiUser } from 'react-icons/fi';

const getNights = (startDate, endDate) =>
  Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

const BookingDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: #808080;
  .nightsNumber {
    padding-right: 5px;
    padding-left: 5px;
  }
`;

const BookingDetails = ({ dateArrival, people, dateDeparture }) => {
  return (
    <BookingDetailsWrapper>
      {dateArrival.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
      ,
      <div className="nightsNumber">
        {getNights(dateArrival, dateDeparture)}
        <FiMoon />
      </div>
      <>
        {people}
        <FiUser />
      </>
    </BookingDetailsWrapper>
  );
};

BookingDetails.propTypes = {
  dateArrival: PropTypes.instanceOf(Date),
  people: number,
  dateDeparture: PropTypes.instanceOf(Date),
};

export default BookingDetails;
