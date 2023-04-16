import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles['spinner']}>
      <div className={styles['spinner__loader']}></div>
    </div>
  );
};

export default Spinner;
