import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';

const store = setupStore();

describe('Testing Header component', () => {
  afterEach(cleanup);

  it('renders title', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const title = getByRole('heading');
    expect(title).toHaveTextContent('Unsearch!');
  });
});
