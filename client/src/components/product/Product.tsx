'use client';

import React, { useMemo, useState } from 'react';
import { Product } from './types';
import ProductImage from './ProductImg';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import styles from './style.module.css';
import ProductSpecifications from './ProductSpecifications';

type ProductProps = {
  product: Product;
};

function ProductDetails({ product }: ProductProps) {
  const {
    name,
    power,
    description,
    price,
    quantity,
    brand,
    weight,
    height,
    width,
    length,
    model_code,
    colour,
    img_url,
  } = product;
  const [totalQuantity, setTotalQuantity] = useState<number>(1);
  const minimumQuantity = 1;
  const isDecreaseBtnDisabled = totalQuantity === minimumQuantity;

  const totalPrice = useMemo(
    () => price * totalQuantity,
    [totalQuantity, price]
  );

  const handleIncreaseQuantity = () => {
    setTotalQuantity(totalQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > minimumQuantity) {
      setTotalQuantity(totalQuantity - 1);
    }
  };

  return (
    <div className={styles.productWrapper}>
      <section>
        <div className={styles['card-header']}>
          <ProductImage imageUrl={img_url} />

          <ProductTitle title={name} power={power} packet={quantity} />
        </div>
        <div>
          <ProductPrice
            price={totalPrice}
            quantity={totalQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            isDecreaseDisabled={isDecreaseBtnDisabled}
          />
        </div>
      </section>
      <section>
        <ProductDescription description={description} />
        <ProductSpecifications
          brand={brand}
          weight={weight}
          height={height}
          width={width}
          length={length}
          modelCode={model_code}
          color={colour}
        />
      </section>
    </div>
  );
}

export default ProductDetails;
