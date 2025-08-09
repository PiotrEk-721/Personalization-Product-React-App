import { useState, useMemo } from 'react';
import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImageComponent.js';
import ProductForm from '../ProductForm/ProductForm.js';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0] || '');
  const [currentSize, setCurrentSize] = useState(props.sizes[0] || '');

  const price = useMemo(() => {
    const selectedSize = props.sizes.find((size) => size.name === currentSize.name);
    return props.basePrice + selectedSize.additionalPrice;
  }, [currentSize.name, props.basePrice, props.sizes]);

  const handleSubmitButton = (event) => {
    event.preventDefault();

    const selectedSize = props.sizes.find((size) => size.name === currentSize.name);

    console.log(`
      Summary:
      ===========
      Name: ${props.title}
      Price: ${price}$
      Size: ${selectedSize.name}
      Color: ${currentColor}
      `);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} color={currentColor} />
      <ProductForm
        title={props.title}
        getPrice={price}
        sizes={props.sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        colors={props.colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
        onSubmit={handleSubmitButton}
      />
    </article>
  );
};

export default Product;
