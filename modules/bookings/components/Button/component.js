import React from 'react';
import { func, bool, node } from 'prop-types';
import classNames from 'classNames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

export const Component = props => {
  const buttonStyles = cx(styles.button, {
    solid: props.solid,
  });

  return (
    <div onClick={props.onClick} className={buttonStyles}>
      {props.children}
    </div>
  );
};

Component.propTypes = {
  onClick: func.isRequired,
  solid: bool,
  children: node,
};
