import React, { ReactNode } from 'react';
import styles from './NotFound.module.css';

class NotFound extends React.Component {
  render(): ReactNode {
    return (
      <main className={styles['not-found']}>
        <h1>404</h1>
        <h2>Sorry, page not found</h2>
      </main>
    );
  }
}

export default NotFound;
