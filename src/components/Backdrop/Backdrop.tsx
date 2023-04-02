import React from 'react';
import { BackdropProps } from 'types/interfaces';
import Modal from '../Modal';
import styles from './Backdrop.module.scss';

const Backdrop = (props: BackdropProps) => {
  return (
    <div className={styles['backdrop']}>
      <Modal message={props.data} />
    </div>
  );
};

export default Backdrop;
