import React from 'react';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = () => {
  return (
    <main className={styles['error-message']}>
      <h1>Error!</h1>
      <h2>Data cannot be loaded locally</h2>
      <h2>Use your own Unsplash API key or follow the link https://rsschool-react.vercel.app/</h2>
    </main>
  );
};

export default ErrorMessage;
