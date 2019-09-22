import React, { Component } from 'react';
import Reservation from './Reservation'; 
import styles from './styles.scss';

class GuestList extends Component {
    render() {
        return <div className={styles.Sidebar}>
            <div>
                {this.props.users.map((booking, i) => (<Reservation key={`item_${i}`} user={booking} />))}
            </div>
        </div>
    }
}
export default GuestList; 