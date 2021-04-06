import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.scss';

class SearchBar extends Component {
  state = { query: '' };

  handleChange = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm__button}>
            <span className={styles.SearchForm__label}>Search</span>
          </button>

          <input
            className={styles.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
