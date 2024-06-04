import ProductDetails from '@/components/product/Product';

import React from 'react';
import { getProduct } from '@/lib/dbQuery';
import { notFound } from 'next/navigation';
type ProductPageProps = {
  params: {
    productId: string;
  };
};

async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);
  if (!product) {
    notFound();
  }
  return <ProductDetails product={product} />;
}

export default ProductPage;
