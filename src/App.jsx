import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import apiHits from './api';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    // showModal: false,
    selectImage: {},
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  handleChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    this.setState({ isLoading: true });

    apiHits
      .fetchHits(options)
      .then(hits =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = (url, alt) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectImage: { url, alt },
    }));
  };

  render() {
    const {
      hits,
      isLoading,
      error,
      showModal,
      selectImage: { url, alt },
    } = this.state;

    const shouldRenderLoadButton = hits.length > 0 && !isLoading;

    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={url} alt={alt} />
          </Modal>
        )}

        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <SearchBar onSubmit={this.handleChangeQuery} />
        <ImageGallery hits={hits} onToggleModal={this.toggleModal} />

        {isLoading && (
          <div className="Loader">
            <Loader type="ThreeDots" color="blue" height={80} width={80} />
          </div>
        )}
        {shouldRenderLoadButton && <Button onLoadMore={this.fetchHits} />}
      </div>
    );
  }
}

export default App;
