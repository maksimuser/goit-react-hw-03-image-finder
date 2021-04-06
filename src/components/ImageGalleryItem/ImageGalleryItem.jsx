import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ url, alt, onToggle, onLargeImage }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onToggle(onLargeImage, alt)}
    >
      <img src={url} alt={alt} className={styles.ImageGalleryItem__image} />
    </li>
  );
};

export default ImageGalleryItem;
