import React, { Component } from 'react';
import CalendarLogo from '../../../../static/calendar.svg';
import styles from './styles.scss';

class MainPage extends Component {
    render() {
        return <div className={styles.MainPage}>
            <CalendarLogo />
            <h1 className={styles.MainPage_Title}>Reservations</h1>
            <p className={styles.MainPage_Instruction}>Select any reservation item</p>
            <AddButton label="Create Booking"/>
            <AddButton label="Create Booking with Quote"/>
        </div>
    }
}

export default MainPage;

function AddButton(props) {
    return <div className={styles.MainPage_Button}>
        <div>
            <a>
                {props.label}
            </a>
        </div>
    </div>

}