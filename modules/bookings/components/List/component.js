import React from 'react';
import classNames from 'classNames/bind';
import { FixedSizeList } from 'react-window';
import { number, bool, object, arrayOf, shape } from 'prop-types';

import { Booking } from '../../constants';
import { ListItem } from '../ListItem';
import styles from './styles.css';

const cx = classNames.bind(styles);

const Item = ({ data, index, style }) => (
  <div style={style}>
    <ListItem item={data[index]} />
  </div>
);

Item.propTypes = {
  data: arrayOf(shape(Booking)).isRequired,
  index: number.isRequired,
  style: object.isRequired,
};

export const Component = props => {
  const listStyles = cx(styles.list, {
    'no-scrollbars': props.hideScrollBars,
  });

  return (
    <FixedSizeList
      className={listStyles}
      height={props.listHeight}
      itemData={props.items}
      itemCount={props.items.length}
      itemSize={props.itemHeight}
      width="100%"
    >
      {Item}
    </FixedSizeList>
  );
};

Component.propTypes = {
  items: arrayOf(shape(Booking)).isRequired,
  listHeight: number.isRequired,
  itemHeight: number.isRequired,
  hideScrollBars: bool,
};
