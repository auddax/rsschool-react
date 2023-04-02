import React from 'react';
import { ModalProps } from 'types/interfaces';
import styles from './Modal.module.scss';

const Modal = (props: ModalProps) => {
  return (
    <div className={styles['modal']}>
      <h4>{props.message}</h4>
    </div>
  );
};

export default Modal;
