import React, { ReactNode } from 'react';
import Header from '../../components/Header';
import styles from './About.module.css';

class About extends React.Component {
  render(): ReactNode {
    return (
      <>
        <Header />
        <div className={styles['about']}>
          <p>
            Grocery Store - это свежие натуральные продукты питания, произведенные в соответствии с
            принципами органического сельского хозяйства.
          </p>
          <p>
            Органическое сельское хозяйство — система выращивания растений и животных (а также птиц,
            рыб и пчел), которая применяет экологические безопасные методы поддержания плодородия
            почвы и запрещает использование сельскохозяйственных химикатов (пестицидов,
            синтетических удобрений, гормональных препаратов и т.д.), генной инженерии.
          </p>
        </div>
      </>
    );
  }
}

export default About;
