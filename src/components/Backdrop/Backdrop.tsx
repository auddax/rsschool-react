import React, { ReactNode } from 'react';
import { BackdropProps } from 'types/interfaces';
import Modal from '../Modal';
import styles from './Backdrop.module.scss';

class Backdrop extends React.Component<BackdropProps> {
  render(): ReactNode {
    return (
      <div className={styles['backdrop']}>
        <Modal message={this.props.data} />
      </div>
    );
  }
}

export default Backdrop;
