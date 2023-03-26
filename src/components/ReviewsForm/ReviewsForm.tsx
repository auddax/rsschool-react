import React, { ReactNode } from 'react';
import styles from './ReviewsForm.module.css';
import { products } from '../../../__mocks__/products';

class ReviewsForm extends React.Component {
  render(): ReactNode {
    const types = products
      .map((product) => product[5])
      .filter((product, index, array) => array.indexOf(product) === index)
      .sort();

    return (
      <div>
        <h2 className={styles['reviews-header']}>Оставьте свой отзыв о покупке!</h2>
        <form className={styles['reviews-form']}>
          <fieldset className={styles['form-item']}>
            <label htmlFor="reviewText" className={styles['item__label']}>
              Напишите о своих впечатлениях
            </label>
            <textarea name="review-text" id="reviewText" />
          </fieldset>
          <fieldset className={styles['form-item']}>
            <label htmlFor="purchaseDate" className={styles['item__label']}>
              Дата покупки
            </label>
            <input type="date" name="purchase-date" id="purchaseDate" />
          </fieldset>
          <fieldset className={styles['form-item']}>
            <label htmlFor="productType" className={styles['item__label']}>
              Тип товара
            </label>
            <select name="product-type" id="productType">
              {types.map((type, index) => (
                <option value={'type-' + index} key={'type-' + index}>
                  {type}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className={styles['form-item-row']}>
            <label htmlFor="visibility" className={styles['item__label']}>
              Оставить отзыв анонимно
            </label>
            <input type="checkbox" name="visibility" id="visibility" />
          </fieldset>
          <fieldset className={styles['form-item-row']}>
            <legend className={styles['item__label']}>Оцените товар</legend>
            <input type="radio" name="rate" id="rate-1" />
            <label htmlFor="rate-1">1</label>
            <input type="radio" name="rate" id="rate-2" />
            <label htmlFor="rate-2">2</label>
            <input type="radio" name="rate" id="rate-3" />
            <label htmlFor="rate-3">3</label>
            <input type="radio" name="rate" id="rate-4" />
            <label htmlFor="rate-4">4</label>
            <input type="radio" name="rate" id="rate-5" />
            <label htmlFor="rate-5">5</label>
          </fieldset>
          <fieldset className={styles['form-item']}>
            <label htmlFor="photo" className={styles['item__label']}>
              Фото товара
            </label>
            <input type="file" name="photo" id="photo" />
          </fieldset>
          <button className={styles['form-button']}>Отправить отзыв</button>
        </form>
      </div>
    );
  }
}

export default ReviewsForm;
