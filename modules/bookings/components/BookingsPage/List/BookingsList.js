import React, { Component } from 'react';
import Reservation from '../Reservation';
import style from './style.scss';
import { filterBookings } from '../../../ducks.js';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faSyncAlt, faFilter } from '@fortawesome/free-solid-svg-icons';

class BookingsList extends Component {
    render() {
        return <div >
            <div>
                <Search className={style.Search} users={this.props.users} />
            </div>
            <div className={style.Scroll}>
                {this.props.users.map((booking, i) => (<Reservation key={`item_${i}`} user={booking} />))}
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
export default BookingsList;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        filterBookings(this.props.users, this.state.value);
    }

    render() {
        return (
            <div className={style.Search}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>
                <FontAwesomeIcon icon={faFilter}  style={{ float: 'right' }} />
            </div>
        );
    }
}