'use client';

import React, { useMemo, useState } from 'react';
import { Product } from './types';
import ProductImage from './ProductImg';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import styles from './style.module.css';

type ProductProps = {
  product: Product;
};

function ProductDetails({ product }: ProductProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const minimumQuantity = 1;
  const isDecreaseBtnDisabled = quantity === minimumQuantity;
  const price = useMemo(
    () => product.price * quantity,
    [quantity, product.price]
  );

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > minimumQuantity) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.productWrapper}>
      <div className={styles['card-header']}>
        <ProductImage imageUrl={product.img_url} />

        <ProductTitle
          title={product.name}
          power={product.power}
          packet={product.quantity}
        />
      </div>
      <div>
        <ProductPrice
          price={price}
          quantity={quantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          isDecreaseDisabled={isDecreaseBtnDisabled}
        />
      </div>

      <ProductDescription description={product.description} />
    </div>
  );
}

export default ProductDetails;
