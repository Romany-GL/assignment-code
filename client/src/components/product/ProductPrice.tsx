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
      <div className={styles.price}>
        <data value={price}>£ {price}</data>
      </div>

      <small className={styles.qty}>Qty</small>

      <div className={styles.actionButtons}>
        <button
          className={`${isDecreaseDisabled ? styles.disabled : styles.btn}`}
          onClick={handleDecreaseQuantity}
          disabled={isDecreaseDisabled}
        >
          -
        </button>

        <div className={styles.quantityWrapper}>
          <span title='Current quantity'>{quantity}</span>
        </div>

        <button className={styles.btn} onClick={handleIncreaseQuantity}>
          +
        </button>
      </div>
    </div>
  );
}

export default ProductPrice;
