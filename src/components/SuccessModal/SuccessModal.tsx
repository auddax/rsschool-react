import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { SuccessModalProps } from 'types/interfaces';
import Backdrop from '../Backdrop';

class SuccessModal extends React.Component<SuccessModalProps> {
  render(): ReactNode {
    const container = document.getElementById('backdrop-root') as Element;
    return <>{ReactDOM.createPortal(<Backdrop data={this.props.data} />, container)}</>;
  }
}

export default SuccessModal;
