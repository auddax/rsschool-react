import React from 'react';
import ReactDOM from 'react-dom';
import { PhotoModalProps } from 'types/interfaces';
import Backdrop from '../Backdrop';

const PhotoModal = (props: PhotoModalProps) => {
  const container = document.getElementById('backdrop-root') as Element;
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop handlerClick={props.handlerClick} data={props.data} />,
        container
      )}
    </>
  );
};

export default PhotoModal;
