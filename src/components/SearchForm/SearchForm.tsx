import React, { ReactNode } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends React.Component {
  render(): ReactNode {
    return (
      <form className={styles['search-form']}>
        <input type="search" placeholder=" Search" id="itemsSearch" autoComplete="off" autoFocus />
      </form>
    );
  }
}

export default SearchForm;
