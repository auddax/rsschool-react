import React from 'react';
import { BackdropModalProps } from 'types/interfaces';
import Modal from '../Modal';
import styles from './Backdrop.module.scss';

const Backdrop = (props: BackdropModalProps) => {
  const { type, data } = props.data;
  return (
    <div onClick={props.handlerClick} className={styles['backdrop']}>
      <Modal type={type} data={data} />
    </div>
  );
};

export default Backdrop;
