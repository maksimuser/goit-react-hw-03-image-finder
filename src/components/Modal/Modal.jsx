import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlay = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div className={styles.Overlay} onClick={this.handleOverlay}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
