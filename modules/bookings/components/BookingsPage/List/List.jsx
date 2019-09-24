import React, { Component } from 'react';
import BookingsListReservation from './Reservation/Reservation';
import style from './style.scss';
import BookingsListSearch from './Search/Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSyncAlt } from '@fortawesome/free-solid-svg-icons';


class BookingsList extends Component {
    render() {
        return <div >
            <div>
                <BookingsListSearch className={style.Search} users={this.props.users} filterBookings={this.props.filterBookings} />
            </div>
            <div className={style.Scroll}>
                {this.props.filteredBooking.map((booking, i) => (<BookingsListReservation key={`item_${i}`} user={booking} />))}
            </div>
            <div className={style.Footer}>
                <div className={style.Footer_Labels}>
                    <label>Select</label>
                    <FontAwesomeIcon icon={faDownload} />
                    <FontAwesomeIcon icon={faSyncAlt} style={{ float: 'right' }} />
                </div>
                <div className={style.Footer_Button}>
                    <a>
                        CREATE BOOKING
                    </a>
                </div>
            </div>
        </div>
    }
}
  
export default BookingsList

