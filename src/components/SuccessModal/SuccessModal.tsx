import React from 'react';
import ReactDOM from 'react-dom';
import { SuccessModalProps } from 'types/interfaces';
import Backdrop from '../Backdrop';

const SuccessModal = (props: SuccessModalProps) => {
  const container = document.getElementById('backdrop-root') as Element;
  return <>{ReactDOM.createPortal(<Backdrop data={props.data} />, container)}</>;
};

export default SuccessModal;
