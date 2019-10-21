import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import { noop } from '../../../utils/noop';
import { Booking } from '../../constants';
import { SearchBar } from '../SearchBar';
import { Button } from '../Button';
import { List } from '../List';
import styles from './styles.css';

export class Component extends React.PureComponent {
  constructor(props) {
    super(props);

    this.listContainer = React.createRef();

    this.state = {
      searchTerm: '',
      listHeight: 0,
    };

    this.setListHeight = this.setListHeight.bind(this);
  }

  filterBookings(guestName) {
    return this.props.bookings.filter(booking =>
      booking.guestName.toLowerCase().includes(guestName),
    );
  }

  setListHeight() {
    const listHeight =
      this.listContainer.current.clientHeight || this.state.listHeight;
    this.setState({ listHeight });
  }

  componentDidMount() {
    this.setListHeight();
    window.addEventListener('resize', this.setListHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setListHeight);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <SearchBar onSearch={searchTerm => this.setState({ searchTerm })} />
        </div>

        <div className={styles.list} ref={this.listContainer}>
          <List
            items={this.filterBookings(this.state.searchTerm.toLowerCase())}
            listHeight={this.state.listHeight}
            itemHeight={100}
            hideScrollBars={true}
          />
        </div>

        <div className={styles.footer}>
          <div className={styles.footerToolbar}>
            <span>Select</span>
            <FontAwesomeIcon icon={faDownload} className={styles.icon} />
            <FontAwesomeIcon icon={faSyncAlt} className={styles.icon} />
          </div>
          <div className={styles.footerMain}>
            <Button solid onClick={noop}>
              CREATE BOOKING
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  bookings: arrayOf(shape(Booking)),
};
