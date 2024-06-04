import ProductDetails from '@/components/product/Product';
import { ModelCode, Product } from '@/components/product/types';
import { Mode } from 'fs';
import React from 'react';

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const mockProduct: Product = {
  id: 1,
  name: 'Energy saving light bulb',
  power: '25W',
  description:
    'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
  price: 5,
  quantity: 4,
  brand: 'Philips',
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  model_code: 'E27 ES' as ModelCode,
  colour: 'Cool daylight',
  img_url: 'https://i.ibb.co/2nzwxnQ/bulb.png',
};

function ProductPage({ params }: ProductPageProps) {
  return <ProductDetails product={mockProduct} />;
}

export default ProductPage;
