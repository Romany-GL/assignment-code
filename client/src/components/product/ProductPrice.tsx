'use client';

import React from 'react';
import styles from './style.module.css';

type ProductPriceProps = {
  price: number;
  quantity: number;
  handleIncreaseQuantity: () => void;
  handleDecreaseQuantity: () => void;
  isDecreaseDisabled: boolean;
};

function ProductPrice({
  price,
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
  isDecreaseDisabled,
}: ProductPriceProps) {
  return (
    <div className={styles.priceWrapper}>
      <data value={price}>£ {price}</data>
      <div>
        <button onClick={handleDecreaseQuantity} disabled={isDecreaseDisabled}>
          -
        </button>
        <span title='Current quantity'>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
    </div>
  );
}

export default ProductPrice;
