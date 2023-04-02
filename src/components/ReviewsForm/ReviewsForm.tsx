import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import SuccessModal from '../SuccessModal';
import { productsList } from '../../../__mocks__/products';
import { IReview, ReviewFormProps } from 'types/interfaces';
import styles from './ReviewsForm.module.scss';

const ReviewsForm = (props: ReviewFormProps) => {
  const { handleReviews } = props;
  const [isReviewSend, setIsReviewSend] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IReview>();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IReview> = (data) => {
    handleReviews(structuredClone(data));
    setIsReviewSend(true);
    setTimeout(() => {
      setIsReviewSend(false);
    }, 2000);
  };

  const types = productsList
    .map((product) => product[5])
    .filter((product, index, array) => array.indexOf(product) === index)
    .sort();

  return (
    <div>
      <h2 className={styles['reviews-header']}>Оставьте свой отзыв о покупке!</h2>
      <form className={styles['reviews-form']} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles['form-item']}>
          <label
            htmlFor="reviewText"
            className={`${styles['item__label']} ${styles['label_required']}`}
          >
            Напишите о своих впечатлениях
          </label>
          <textarea id="reviewText" rows={7} {...register('reviewText')} required />
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label
            htmlFor="purchaseDate"
            className={`${styles['item__label']} ${styles['label_required']}`}
          >
            Дата покупки
          </label>
          <input type="date" id="purchaseDate" {...register('purchaseDate')} required />
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label htmlFor="productType" className={styles['item__label']}>
            Тип товара
          </label>
          <select id="productType" {...register('productType')}>
            {types.map((type, index) => (
              <option value={type} key={'type-' + index}>
                {type}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label
            htmlFor="customerName"
            className={`${styles['item__label']} ${styles['label_required']}`}
          >
            Ваше имя
          </label>
          <input type="text" id="customerName" {...register('customerName')} required />
        </fieldset>
        <fieldset className={styles['form-item-row']}>
          <label htmlFor="visibility" className={styles['item__label']}>
            Оставить отзыв анонимно
          </label>
          <input type="checkbox" id="visibility" {...register('visibility')} />
        </fieldset>
        <fieldset className={styles['form-item-row']}>
          <legend className={styles['item__label']}>Оцените товар</legend>
          <input type="radio" id="rate-1" value="1" {...register('rate')} />
          <label htmlFor="rate-1">1</label>
          <input type="radio" id="rate-2" value="2" {...register('rate')} />
          <label htmlFor="rate-2">2</label>
          <input type="radio" id="rate-3" value="3" {...register('rate')} />
          <label htmlFor="rate-3">3</label>
          <input type="radio" id="rate-4" value="4" {...register('rate')} />
          <label htmlFor="rate-4">4</label>
          <input type="radio" id="rate-5" value="5" {...register('rate')} />
          <label htmlFor="rate-5">5</label>
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label htmlFor="photo" className={styles['item__label']}>
            Фото товара
          </label>
          <input type="file" id="photo" {...register('photo')} />
        </fieldset>
        <button className={styles['form-button']}>Отправить отзыв</button>
      </form>
      {isReviewSend && <SuccessModal data="Ваш отзыв отправлен!" />}
    </div>
  );
};

export default ReviewsForm;
