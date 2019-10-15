import React from 'react';
import styles from '../styles.css';
import { renderIf } from 'helpers';
import Circle from 'static/circle.svg';
import Replay from 'static/replay.svg';
import { bool, string } from 'prop-types';

function StatusContainer({ replied, statusColor }) {
  return (
    <div className={styles.statusContainer}>
      <div>
        <Circle fill={statusColor} width={10} height={10} />
      </div>
      {renderIf(
        replied,
        <div>
          <Replay width={10} height={10} />
        </div>,
      )}
    </div>
  );
}

StatusContainer.propTypes = {
  replied: bool,
  statusColor: string,
};

export default StatusContainer;
