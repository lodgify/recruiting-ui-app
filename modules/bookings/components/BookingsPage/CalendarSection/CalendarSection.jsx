import React from 'react';
// Components
import CalendarLogo from '../../../../../static/calendar.svg';
import Wrapper from '../../common/Wrapper/Wrapper';
import Text from '../../BookingsPage/Text/Text';
import Button from '../../common/Button/Button';
import styles from '../styles.css';

const CalendarSection = () => {
  return (
    <>
      <Wrapper classes={styles.calendarWrapper}>
        <CalendarLogo />
        <Text variant="h1" styles={styles.Title} text="Reservations" />
        <Text
          variant="p"
          styles={styles.Paragraph}
          text="Select any reservation item"
        />
        <Button />
        <Button
          styles={styles.ButtonOverride}
          text="Create Booking with Quote"
        />
      </Wrapper>
    </>
  );
};

export default CalendarSection;
