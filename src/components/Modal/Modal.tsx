import React, { ReactNode } from 'react';
import { ModalProps } from 'types/interfaces';
import styles from './Modal.module.css';

class Modal extends React.Component<ModalProps> {
  render(): ReactNode {
    return (
      <div className={styles['modal']}>
        <h4>{this.props.message}</h4>
      </div>
    );
  }
}

export default Modal;
