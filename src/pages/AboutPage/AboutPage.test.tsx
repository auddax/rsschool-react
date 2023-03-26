import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './AboutPage';
import { BrowserRouter } from 'react-router-dom';

describe('Testing About component', () => {
  afterEach(cleanup);

  it('renders about page text content', () => {
    const { getByText } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
    const aboutTextContent = getByText(
      'Grocery Store - это свежие натуральные продукты питания, произведенные в соответствии с принципами органического сельского хозяйства.'
    );
    expect(aboutTextContent).toBeDefined();
  });
});
