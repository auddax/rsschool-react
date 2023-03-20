import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('Testing NavBar component', () => {
  afterEach(cleanup);

  it('renders nav links', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const navLinks = getAllByRole('link');
    expect(navLinks[0]).toHaveTextContent('Home');
    expect(navLinks[1]).toHaveTextContent('About us');
  });
});
