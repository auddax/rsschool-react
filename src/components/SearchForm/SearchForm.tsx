import React, { ReactNode } from 'react';
import styles from './SearchForm.module.css';

class SearchForm extends React.Component<object, { search: string }> {
  constructor(props: object) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(): void {
    const value = localStorage.getItem('searchValue');
    if (value) {
      this.setState({
        search: value,
      });
    }
  }

  handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    this.setState({
      search: value,
    });
    localStorage.setItem('searchValue', value);
  }

  render(): ReactNode {
    return (
      <form className={styles['search-form']}>
        <input
          type="search"
          placeholder=" Search"
          id="itemsSearch"
          autoComplete="off"
          value={this.state.search}
          onChange={this.handleInput}
          autoFocus
        />
      </form>
    );
  }
}

export default SearchForm;
