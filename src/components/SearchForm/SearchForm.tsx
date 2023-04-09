import React, { useState, useEffect } from 'react';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const value = localStorage.getItem('searchValue');
    if (value) {
      setSearchInput(value);
    }
  }, []);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchInput(value);
    localStorage.setItem('searchValue', value);
  };

  return (
    <form className={styles['search-form']}>
      <input
        type="search"
        placeholder=" Search photos"
        id="itemsSearch"
        autoComplete="off"
        value={searchInput}
        onChange={handleSearchInput}
        className={styles['search-form__input']}
        autoFocus
      />
      <button type="button" className={styles['search-form__btn']}></button>
    </form>
  );
};

export default SearchForm;
