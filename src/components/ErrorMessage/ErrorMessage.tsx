import React, { ReactNode } from 'react';
import styles from './ErrorMessage.module.scss';

class ErrorMessage extends React.Component {
  render(): ReactNode {
    return (
      <main className={styles['error-message']}>
        <h1>Error!</h1>
        <h2>Data cannot be loaded locally</h2>
        <h2>Please follow the link https://rsschool-react.vercel.app/</h2>
      </main>
    );
  }
}

export default ErrorMessage;
