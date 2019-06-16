import React from 'react';
import styled from 'styled-components';
import { FiCornerUpLeft } from 'react-icons/fi';
import { bool, string } from 'prop-types';

const bookingStatusColor = {
  Booked: '#008000',
  Unavailable: '#808080',
  Declined: '#FF0000',
  Tentative: '	#FFA500',
  Open: '#FFA500',
};

const BookingStatus = styled.div`
    height: 10px; 
    width: 10px;
    background-color: ${props => bookingStatusColor[props.status]};
    border-radius: 50%;
    margin: 4px;
  }
`;

const BookingStatusesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookingStatuses = ({ status, replied }) => {
  return (
    <BookingStatusesWrapper>
      <BookingStatus status={status} />
      {replied && <FiCornerUpLeft />}
    </BookingStatusesWrapper>
  );
};

BookingStatuses.propTypes = {
  status: string,
  replied: bool,
};

export default BookingStatuses;
