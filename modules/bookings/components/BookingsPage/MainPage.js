import React, { Component } from 'react';
import CalendarLogo from '../../../../static/calendar.svg';
import styles from './styles.scss';

class MainPage extends Component {
    render() {
        return <div className={styles.MainPage}>
            <CalendarLogo />
            <h1 className={styles.MainPage_Title}>Reservations</h1>
            <p>Select any reservation item</p>
        </div>
    }
}

export default MainPage; 