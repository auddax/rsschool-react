import React from 'react';
import styles from './Card.module.css';
class Card extends React.Component {
    render() {
        return React.createElement("article", { className: styles['card'] }, this.props.children);
    }
}
export default Card;
