import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';
import style from './style.scss'; 

class BookingsListSearch extends Component {
    static displayName = 'BookingsListSearch';
    static propTypes = {
        filterBookings: func.isRequired,
        users: arrayOf(shape({ guestName: string })),
    };

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.filterBookings(this.props.users, this.state.value);
        console.log(this.state.value)
    }
    handleSubmit(event) {
        this.props.filterBookings(this.props.users, this.state.value);
        console.log(this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <div className={style.Search}>
                <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value}
                            placeholder='Search'
                            onChange={this.handleChange} />
                            <FontAwesomeIcon icon={faSearch} className={style.Search_Search}/>
                </form>
                <FontAwesomeIcon icon={faFilter} className={style.Search_Filter}/>
            </div>
        );
    }
}

export default BookingsListSearch