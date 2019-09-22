import React, { Component } from 'react';
import styles from './styles.scss';
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


class Reservation extends Component {
    render() {
        let createdDate = this.props.user.dateCreated.toLocaleDateString();
        let arrivalDate = moment(this.props.user.dateArrival).format('MMM DD YYYY');
        //Difference in number of days
        let nights = (moment(this.props.user.dateDeparture).diff(moment(this.props.user.dateArrival), 'days'));
        let amount = new Intl.NumberFormat('en-EN', { style: 'currency', currency: this.props.user.currencyCode }).format(this.props.user.amountPaid)
        return <div className={styles.Reservation}>
            <div>
                <span className={styles.Reservation_GuestName}>{this.props.user.guestName}</span>
                <span className={styles.Reservation_BookingDate}>{createdDate}</span>
            </div>
            <div className={styles.Reservation_PropertyName}>
                <FontAwesomeIcon icon={faReply} />
                <span>{this.props.user.propertyName}</span>
            </div>
            <div className={styles.Reservation_ArrivalInfo}>
                <span >{arrivalDate}, {nights} <FontAwesomeIcon icon={faMoon} />, {this.props.user.people} <FontAwesomeIcon icon={faUser} /></span>
                <div className={styles.Reservation_Amount}>
                    <span>{amount}</span>
                </div>
            </div>
        </div>
    }
}

export default Reservation; 
