import React from 'react';

import styles from './index.scss';

class Sidebar extends React.PureComponent {
  render() {
    return (
      <div className={styles.sidebar}>
        <p>Hello From sidebar!</p>
      </div>
    );
  }
}

export default Sidebar;
