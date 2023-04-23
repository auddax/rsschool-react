import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import SuccessModal from '../SuccessModal';
import { IReview } from 'types/interfaces';
import styles from './ReviewsForm.module.scss';
import { formSlice } from '../../store/reducers/FormSlice';
import { useAppDispatch } from '../../hooks/redux';

const ReviewsForm = () => {
  const [isReviewSend, setIsReviewSend] = useState<boolean>(false);
  const { addReview } = formSlice.actions;
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<IReview>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IReview> = (data) => {
    dispatch(addReview(data));
    setIsReviewSend(true);
    setTimeout(() => {
      setIsReviewSend(false);
    }, 2000);
  };

  return (
    <div>
      <h2 className={styles['reviews-header']}>Создайте свою галлерею!</h2>
      <form className={styles['reviews-form']} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={styles['form-item']}>
          <label htmlFor="photo" className={`${styles['item__label']} ${styles['label_required']}`}>
            Фото для загрузки
          </label>
          <input type="file" id="photo" {...register('photo')} required />
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label
            htmlFor="reviewText"
            className={`${styles['item__label']} ${styles['label_required']}`}
          >
            Описание фото
          </label>
          <textarea id="reviewText" rows={7} {...register('reviewText')} required />
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label
            htmlFor="purchaseDate"
            className={`${styles['item__label']} ${styles['label_required']}`}
          >
            Дата съемки
          </label>
          <input type="date" id="purchaseDate" {...register('purchaseDate')} required />
        </fieldset>
        <fieldset className={styles['form-item']}>
          <label htmlFor="productType" className={styles['item__label']}>
            Категория
          </label>
          <select id="productType" {...register('productType')}>
            <option value="Портрет">Портрет</option>
            <option value="Пейзаж">Пейзаж</option>
            <option value="Животные">Животные</option>
            <option value="Архитектура">Архитектура</option>
            <option value="Натюрморт">Натюрморт</option>
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
            Не показывать имя
          </label>
          <input type="checkbox" id="visibility" {...register('visibility')} />
        </fieldset>
        <fieldset className={styles['form-item-row']}>
          <legend className={styles['item__label']}>Добавьте оценку</legend>
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
        <button className={styles['form-button']}>Загрузить фото</button>
      </form>
      {isReviewSend && <SuccessModal data={{ type: 'success', data: 'Ваше фото отправлено!' }} />}
    </div>
  );
};

export default ReviewsForm;
