import React from 'react';
import { ModalProps, IPhoto } from 'types/interfaces';
import styles from './Modal.module.scss';

const Modal = (props: ModalProps) => {
  const { type } = props;
  let modal;

  if (type === 'success') {
    const data = props.data as string;
    modal = (
      <div className={styles['success-modal']}>
        <h4>{data}</h4>
      </div>
    );
  } else {
    const data = props.data as IPhoto;
    modal = (
      <div className={styles['photo-modal']}>
        <figure className={styles['modal-img']}>
          <img src={data.urls.regular} alt={data.alt_description} />
          <figcaption className={styles['modal-description']}>
            <p>Описание: {data.description}</p>
            <p>Автор: {data.user.username}</p>
          </figcaption>
        </figure>
      </div>
    );
  }

  return modal;
};

export default Modal;
