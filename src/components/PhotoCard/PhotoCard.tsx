import React, { ReactNode } from 'react';
import { PhotoCardProps } from 'types/interfaces';
import Card from '../Card';
import styles from './PhotoCard.module.scss';

class PhotoCard extends React.Component<PhotoCardProps> {
  render(): ReactNode {
    const data = this.props.data;
    const createDate = new Date(data.created_at).toLocaleDateString('ru');
    return (
      <Card handlerClick={this.props.handlerClick}>
        <figure className={styles['card-img']}>
          <img src={data.urls.small} alt={data.alt_description || 'Unsplash photo'} />
        </figure>
        <p className={styles['card-price']}>Понравилось: {data.likes}</p>
        <p className={styles['card-instock']}>Создано: {createDate}</p>
      </Card>
    );
  }
}

export default PhotoCard;
