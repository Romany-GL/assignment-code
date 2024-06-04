import ProductDetails from '@/components/product/Product';
import { ModelCode, Product } from '@/components/product/types';
import React from 'react';
import { getClient } from '../../../ApolloClient';
import { gql } from '@apollo/client';
type ProductPageProps = {
  params: {
    productId: string;
  };
};

const PRODUCT_QUERY = gql`
  query Product($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;

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
async function ProductPage({ params }: ProductPageProps) {
  console.log('params.productId:::>>>', params.productId);
  const client = getClient();
  const { data } = await client.query({
    query: PRODUCT_QUERY,
    variables: { id: params.productId },
  });

  console.log('data:::>>>', data);
  return <ProductDetails product={data.Product} />;
}

export default ProductPage;
