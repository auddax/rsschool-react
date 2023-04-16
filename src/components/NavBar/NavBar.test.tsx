import React from 'react';
import matchers from '@testing-library/jest-dom/matchers';
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';
expect.extend(matchers);

const store = setupStore();

describe('Testing NavBar component', () => {
  afterEach(cleanup);

  it('renders nav links', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>
    );
    const navLinks = getAllByRole('link');
    expect(navLinks[0]).toHaveTextContent('Home');
    expect(navLinks[1]).toHaveTextContent('About us');
  });
});
