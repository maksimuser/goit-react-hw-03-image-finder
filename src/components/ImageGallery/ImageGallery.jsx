import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.scss';

const ImageGallery = ({ hits, onToggleModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {hits.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            url={webformatURL}
            alt={tags}
            onToggle={onToggleModal}
            onLargeImage={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.defaultProp = {
  hits: [],
};

ImageGallery.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
};
export default ImageGallery;
