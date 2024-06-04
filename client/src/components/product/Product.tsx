'use client';

import React, { useMemo, useState } from 'react';
import { Product } from './types';
import ProductImage from './image/ProductImg';
import ProductTitle from './title/ProductTitle';
import QuantitySelector from './quantitySelector/QuantitySelector';
import ProductDescription from './description/ProductDescription';
import styles from './style.module.css';
import ProductSpecifications from './specifications/ProductSpecifications';
import AddToCartBtn from './addToCartBtn/AddToCartBtn';
import { CartProvider, useCart } from '@/contexts/CartContext';

type ProductProps = {
  product: Product;
};

function ProductDetails({ product }: ProductProps) {
  const {
    id,
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

  const { addToCart } = useCart();
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
  const handleAddToCart = () => {
    console.log('Add to cart clicked');
    addToCart({
      id,
      name,
      price,
      quantity: totalQuantity,
    });
    setTotalQuantity(1);
  };

  return (
    <div className={styles.productWrapper}>
      <section>
        <div className={styles['card-header']}>
          <ProductImage imageUrl={img_url} />
          <ProductTitle title={name} power={power} packet={quantity} />
        </div>

        <QuantitySelector
          price={totalPrice}
          quantity={totalQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          isDecreaseDisabled={isDecreaseBtnDisabled}
        />
        <AddToCartBtn handleClick={handleAddToCart} />
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
