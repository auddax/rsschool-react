import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import SearchForm from './SearchForm';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';

const store = setupStore();

describe('Testing SearchForm component', () => {
  afterEach(cleanup);

  it('renders search input', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );
    const searchInput = getByPlaceholderText('Search photos');
    expect(searchInput).toBeDefined();
  });
});
