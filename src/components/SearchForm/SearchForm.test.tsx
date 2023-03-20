import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchForm from './SearchForm';

describe('Testing SearchForm component', () => {
  afterEach(cleanup);

  it('renders search input', () => {
    const { getByPlaceholderText } = render(<SearchForm />);
    const searchInput = getByPlaceholderText('Search');
    expect(searchInput).toBeDefined();
  });
});
