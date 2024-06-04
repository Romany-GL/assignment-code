import { Product } from '@/components/product/types';
import { getClient } from './apolloClient';
import { gql } from '@apollo/client';

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

export async function getProduct(id: string): Promise<Product> {
  const client = getClient();
  const { data } = await client.query({
    query: PRODUCT_QUERY,
    variables: { id },
  });
  console.log('data:::>>>', data);
  return data.Product;
}
