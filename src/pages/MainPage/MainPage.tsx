import React, { ReactNode } from 'react';
import Header from '../../components/Header';
import Products from '../../components/Products';
import './MainPage.module.scss';

class Main extends React.Component {
  render(): ReactNode {
    return (
      <>
        <Header />
        <Products />
      </>
    );
  }
}

export default Main;
