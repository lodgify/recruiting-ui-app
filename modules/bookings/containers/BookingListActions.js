import {connect} from 'react-redux';
import { fetchBookings } from '../../ducks';
import Actions from '../Actions';

const mapDispatchToProps = {
    onRefresh: fetchBookings
}

const BookingListActions = connect(null, mapDispatchToProps)(Actions);

export default BookingListActions;