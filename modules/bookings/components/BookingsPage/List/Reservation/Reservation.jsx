import React, { Component } from 'react';
import style from './style.scss';
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faUser, faMoon } from '@fortawesome/free-solid-svg-icons';


class BookingsListReservation extends Component {
    render() {
        let createdDate = this.props.user.dateCreated.toLocaleDateString();
        let arrivalDate = moment(this.props.user.dateArrival).format('MMM DD YYYY');
        //Difference in number of days
        let nights = (moment(this.props.user.dateDeparture).diff(moment(this.props.user.dateArrival), 'days'));
        let amount = new Intl.NumberFormat('en-EN', { style: 'currency', currency: this.props.user.currencyCode }).format(this.props.user.amountPaid)
        let dotColor = '#bbb';
        switch (this.props.user.status) {
            case 'Booked':
                dotColor = `lightgreen`;
                break;
            case 'Declined':
                dotColor = `lightcoral`;
                break;
            case 'Unavailable':
                dotColor = `gray`;
                break; 
            default: 
                dotColor = `orange`; 
                break; 
        }
        let dotStyle = {
            height: `0.7em`,
            width: `0.7em`,
            backgroundColor: dotColor,
            borderRadius: `50%`,
            display: `inline-block`
        };
        return <div className={style.Reservation}>
            <div>
                <span style={dotStyle}></span>
            </div>
            <div>
                <span className={style.Reservation_GuestName}>{this.props.user.guestName}</span>
                <span className={style.Reservation_BookingDate}>{createdDate}</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faReply} />
            </div>
            <div className={style.Reservation_PropertyName}>
                <span>{this.props.user.propertyName}</span>
            </div>
            <div></div>
            <div className={style.Reservation_ArrivalInfo}>
                <span >{arrivalDate}, {nights} <FontAwesomeIcon icon={faMoon} />, {this.props.user.people} <FontAwesomeIcon icon={faUser} /></span>
                <div className={style.Reservation_Amount}>
                    <span>{amount}</span>
                </div>
            </div>
        </div >
    }
}

export default BookingsListReservation; 
