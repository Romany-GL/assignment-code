import React from 'react';
import styles from '../style.module.css';

type AddToCartBtnProps = {
  handleClick: () => void;
};

function AddToCartBtn({ handleClick }: AddToCartBtnProps) {
  return (
    <div className={styles.row}>
      <button className={styles.cartBtn} onClick={handleClick}>
        Add to cart
      </button>
    </div>
  );
}

export default AddToCartBtn;
