import React from 'react';
import { string, number } from 'prop-types';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const DateCreationAndPaidAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  color: #808080;
  width: 70px;
  .amountPaid {
    border: 1px solid #9a9a9a;
    border-radius: 12px;
    width: 70px;
    text-align: center;
  }
`;

const DateCreationAndPaidAmount = ({
  amountPaid,
  dateCreated,
  currencyCode,
}) => {
  return (
    <DateCreationAndPaidAmountWrapper>
      {dateCreated.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })}
      <div className="amountPaid">
        {currencyCode} {amountPaid}
      </div>
    </DateCreationAndPaidAmountWrapper>
  );
};

DateCreationAndPaidAmount.propTypes = {
  amountPaid: number,
  dateCreated: PropTypes.instanceOf(Date),
  currencyCode: string,
};

export default DateCreationAndPaidAmount;
