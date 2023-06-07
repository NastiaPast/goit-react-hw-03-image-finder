import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onImageClick,
}) => (
  <Item onClick={() => onImageClick(largeImageURL, tags)}>
    <Image src={webformatURL} alt={tags} />
  </Item>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
