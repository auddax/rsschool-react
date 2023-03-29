import React, { ReactNode } from 'react';
import { CardProps } from 'types/interfaces';
import styles from './Card.module.scss';

class Card extends React.Component<CardProps> {
  render(): ReactNode {
    return <article className={styles['card']}>{this.props.children}</article>;
  }
}

export default Card;
