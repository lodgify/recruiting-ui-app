import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                </form>
                <FontAwesomeIcon icon={faFilter} style={{ float: 'right' }} />
            </div>
        );
    }
}

export default BookingsListSearch