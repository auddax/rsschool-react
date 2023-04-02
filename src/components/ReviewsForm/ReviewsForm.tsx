import React, { FormEvent, useState } from 'react';
import SuccessModal from '../SuccessModal';
import { products } from '../../../__mocks__/products';
import { IReview, ReviewFormProps } from 'types/interfaces';
import styles from './ReviewsForm.module.scss';

const ReviewsForm = (props: ReviewFormProps) => {
  const [isReviewSend, setIsReviewSend] = useState<boolean>(false);
  const { handleReviews } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const review: IReview = {
      reviewText: null,
      purchaseDate: null,
      productType: null,
      customerName: null,
      visibility: null,
      rate: null,
      photo: null,
    };

    const target = event.target as HTMLFormElement;
    const data = new FormData(target);

    for (const pair of data.entries()) {
      review[pair[0]] = pair[1];
    }

    setIsReviewSend(true);
    handleReviews(review);
    target.reset();
    setTimeout(() => {
      setIsReviewSend(false);
    }, 2000);
  };

  const types = products
    .map((product) => product[5])
    .filter((product, index, array) => array.indexOf(product) === index)
    .sort();

  return (
    <div>
      <h2 className={styles['reviews-header']}>Оставьте свой отзыв о покупке!</h2>
      <form className={styles['reviews-form']} onSubmit={(e) => handleSubmit(e)}>
        <fieldset className={styles['form-item']}>
          <label htmlFor="reviewText" className={styles['item__label']}>
            Напишите о своих впечатлениях
          </label>
          <textarea name="reviewText" id="reviewText" rows={7} required />
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label htmlFor="purchaseDate" className={styles['item__label']}>
            Дата покупки
          </label>
          <input type="date" name="purchaseDate" id="purchaseDate" required />
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label htmlFor="productType" className={styles['item__label']}>
            Тип товара
          </label>
          <select name="productType" id="productType">
            {types.map((type, index) => (
              <option value={type} key={'type-' + index}>
                {type}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label htmlFor="customerName" className={styles['item__label']}>
            Ваше имя
          </label>
          <input type="text" name="customerName" id="customerName" required />
        </fieldset>
        <fieldset className={styles['form-item-row']}>
          <label htmlFor="visibility" className={styles['item__label']}>
            Оставить отзыв анонимно
          </label>
          <input type="checkbox" name="visibility" id="visibility" />
        </fieldset>
        <fieldset className={styles['form-item-row']}>
          <legend className={styles['item__label']}>Оцените товар</legend>
          <input type="radio" name="rate" id="rate-1" value="1" />
          <label htmlFor="rate-1">1</label>
          <input type="radio" name="rate" id="rate-2" value="2" />
          <label htmlFor="rate-2">2</label>
          <input type="radio" name="rate" id="rate-3" value="3" />
          <label htmlFor="rate-3">3</label>
          <input type="radio" name="rate" id="rate-4" value="4" />
          <label htmlFor="rate-4">4</label>
          <input type="radio" name="rate" id="rate-5" value="5" />
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
      {isReviewSend && <SuccessModal data="Ваш отзыв отправлен!" />}
    </div>
  );
};

export default ReviewsForm;
