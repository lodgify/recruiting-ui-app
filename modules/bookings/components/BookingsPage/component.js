import React from 'react';
import Head from 'next/head';
import { func, bool } from 'prop-types';
import { BookingsEntityProps } from 'modules/bookings/bookingsEntityProps';

import styles from './styles.scss';
import Content from './Content';
import Sidebar from './Sidebar';

export class Component extends React.PureComponent {
  static displayName = 'BookingsPage';
  static propTypes = {
    fetchBookings: func.isRequired,
    isLoading: bool,
    hasFailed: bool,
    data: BookingsEntityProps,
  };

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    if (this.props.isLoading) return 'Loading…';
    if (this.props.hasFailed || !this.props.data) return 'Failed :(';

    return (
      <div className={styles.container}>
        <Head>
          <title>Lodgify Bookings Dashboard</title>
        </Head>
        <Sidebar items={this.props.data} />
        <Content />
      </div>
    );
  }
}
