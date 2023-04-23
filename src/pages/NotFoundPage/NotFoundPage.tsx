import React, { ReactNode } from 'react';
import styles from './NotFoundPage.module.scss';

class NotFound extends React.Component {
  render(): ReactNode {
    return (
      <section className={styles['not-found']}>
        <h1>404</h1>
        <h2>Sorry, page not found</h2>
      </section>
    );
  }
}

export default NotFound;
