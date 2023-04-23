import React from 'react';
import styles from './AboutPage.module.scss';

const AboutPage = () => {
  return (
    <section className={styles['about']}>
      <p>Unsearch provides acesss to millions of Unsplash photos.</p>
      <p>
        Unsplash is a website dedicated to proprietary stock photography. Since 2021, it has been
        owned by Getty Images. The website claims over 330,000 contributing photographers and
        generates more than 13 billion photo impressions per month on their growing library of over
        5 million photos. Unsplash has been cited as one of the world&apos;s leading photography
        websites by Forbes, Design Hub, CNET, Medium and The Next Web.
      </p>
    </section>
  );
};

export default AboutPage;
