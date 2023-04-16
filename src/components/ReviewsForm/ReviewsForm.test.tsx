import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ReviewsForm from './ReviewsForm';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';

const store = setupStore();

describe('Testing ReviewsForm component', () => {
  afterEach(cleanup);

  it('renders form inputs', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <ReviewsForm />
      </Provider>
    );

    const reviewText = getByLabelText('Напишите о своих впечатлениях');
    expect(reviewText).toBeDefined();

    const purchaseDate = getByLabelText('Дата покупки');
    expect(purchaseDate).toBeDefined();

    const customerName = getByLabelText('Ваше имя');
    expect(customerName).toBeDefined();

    const visibility = getByLabelText('Оставить отзыв анонимно');
    expect(visibility).toBeDefined();

    const photo = getByLabelText('Фото товара');
    expect(photo).toBeDefined();
  });
});
