import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('Testing Header component', () => {
  afterEach(cleanup);

  it('renders title', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const title = getByRole('heading');
    expect(title).toHaveTextContent('Our catalog');
  });
});
