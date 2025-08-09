import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';

const ProductImage = (props) => {
  const SRC_PUBLIC_IMAGE_SHIRT = `${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`;

  return (
    <div className={styles.imageContainer}>
      <img className={styles.image} alt={props.title} src={SRC_PUBLIC_IMAGE_SHIRT} />
    </div>
  );
};

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductImage;
