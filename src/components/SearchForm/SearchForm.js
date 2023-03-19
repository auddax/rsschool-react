import React from 'react';
import styles from './SearchForm.module.css';
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        this.handleInput = this.handleInput.bind(this);
    }
    componentDidMount() {
        const value = localStorage.getItem('searchValue');
        if (value) {
            this.setState({
                search: value,
            });
        }
    }
    handleInput(e) {
        const value = e.target.value;
        this.setState({
            search: value,
        });
        localStorage.setItem('searchValue', value);
    }
    render() {
        return (React.createElement("form", { className: styles['search-form'] },
            React.createElement("input", { type: "search", placeholder: " Search", id: "itemsSearch", autoComplete: "off", value: this.state.search, onChange: this.handleInput, autoFocus: true })));
    }
}
export default SearchForm;
