import React, { useState, useEffect, FormEvent } from 'react';
import { searchPhotos } from '../../api/api';
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

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // To make loading process more visible
    setTimeout(() => {
      searchPhotos({ query: searchInput }).then((data) => {
        setPhotosList(data);
        setIsLoading(false);
      });
    }, 1000);
  };

  return (
    <form onSubmit={(e) => handleSearchSubmit(e)} className={styles['search-form']}>
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
      <button className={styles['search-form__btn']}></button>
    </form>
  );
};

export default SearchForm;
