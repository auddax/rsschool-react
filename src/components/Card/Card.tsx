import React from 'react';
import { CardProps } from 'types/interfaces';
import styles from './Card.module.scss';

const Card = (props: CardProps) => {
  return <article className={styles['card']}>{props.children}</article>;
};

export default Card;
