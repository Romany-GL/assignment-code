import React from 'react';
import styles from '../style.module.css';

type ProductTitleProps = {
  title: string;
  power: string;
  packet: number;
};

function ProductTitle({ title, power, packet }: ProductTitleProps) {
  return (
    <div className={styles['card-header']}>
      <h1>{title}</h1>
      <small className={styles['text-muted']}>
        {power} {'//'} Packet of {packet}
      </small>
    </div>
  );
}

export default ProductTitle;
