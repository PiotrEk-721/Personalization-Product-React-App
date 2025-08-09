import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize/OptionSize.js';
import OptionColor from '../OptionColor/OptionColor.js';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductForm = ({
  title,
  getPrice,
  sizes,
  currentSize,
  setCurrentSize,
  colors,
  currentColor,
  setCurrentColor,
  onSubmit,
}) => {
  return (
    <div>
      <header>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>Price: {getPrice}$</span>
      </header>
      <form>
        <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
        <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      </form>
      <Button className={styles.button} onClick={onSubmit}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </div>
  );
};

ProductForm.propsTypes = {
  title: PropTypes.string.isRequired,
  getPrice: PropTypes,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSiz: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.string.isRequired,
  onSubmit: PropTypes.number.isRequired,
};

export default ProductForm;
