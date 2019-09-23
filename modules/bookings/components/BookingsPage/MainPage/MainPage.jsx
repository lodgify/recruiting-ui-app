import React, { Component } from 'react';
import CalendarLogo from '../../../../../static/calendar.svg';
import style from './style.scss';

class BookingsMainPage extends Component {
    render() {
        return <div className={style.MainPage}>
            <CalendarLogo />
            <h1 className={style.MainPage_Title}>Reservations</h1>
            <p className={style.MainPage_Instruction}>Select any reservation item</p>
            <AddButton label="Create Booking"/>
            <AddButton label="Create Booking with Quote"/>
        </div>
    }
}

export default BookingsMainPage;

function AddButton(props) {
    return <div className={style.MainPage_Button}>
        <div>
            <a>
                {props.label}
            </a>
        </div>
    </div>

}