import React, { useState, useEffect, FormEvent } from 'react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { photoSlice } from '../../store/reducers/PhotoSlice';
import { unsplashAPI } from '../../api/api';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [submitInput, setSubmitInput] = useState<string | typeof skipToken>(skipToken);
  const { searchValue } = useAppSelector((state) => state.photoReducer);
  const { setPhotosList, setSearchValue } = photoSlice.actions;
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, error } = unsplashAPI.useSearchPhotosQuery(submitInput);

  useEffect(() => {
    if (data) {
      dispatch(
        setPhotosList({
          photos: data?.results,
          isLoading,
          isSuccess,
          error,
        })
      );
    }
  }, [data, dispatch, error, isLoading, isSuccess, setPhotosList, submitInput]);

  useEffect(() => {
    if (searchValue) {
      setSearchInput(searchValue);
    }
  }, [searchValue]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(setSearchValue(value));
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitInput(searchInput);
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
