import React from 'react';
import { number, string } from 'prop-types';
import styles from '../styles.css';
import Night from 'static/night.svg';
import Person from 'static/person.svg';

function ItemFooter({ arrivalDate, leftDays, people, amountPaid }) {
  return (
    <div className={styles.footerContainer}>
      <div>
        <p style={{ color: 'gray', fontSize: 10 }}>
          {arrivalDate},{leftDays} <Night width={10} height={10} />,{people}{' '}
          <Person width={10} height={10} />
        </p>
      </div>
      <div className={styles.paidAmountContainer}>
        <p className={styles.paidAmount}>{amountPaid}</p>
      </div>
    </div>
  );
}

ItemFooter.propTypes = {
  arrivalDate: string,
  leftDays: number,
  people: number,
  amountPaid: string,
};

export default ItemFooter;
