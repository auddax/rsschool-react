import React, { ReactNode } from 'react';
import './Main.module.css';

class Main extends React.Component {
  render(): ReactNode {
    return (
      <Header />
      <Products />
    );
  }
}

export default Main;
