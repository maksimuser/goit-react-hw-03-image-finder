import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onLoadMore }) => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <button className={styles.Button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
