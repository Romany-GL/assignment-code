export type Product = {
  id: number;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: Brand;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: ModelCode;
  colour: string;
  img_url: string;
};

type Brand = 'Philips' | 'Sony';

export enum ModelCode {
  'E27' = 'E27 ES',
  'B22' = 'B22 BC',
}

export type Products = Product[];
