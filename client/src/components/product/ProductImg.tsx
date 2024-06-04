import Image from 'next/image';
import React, { ReactElement } from 'react';

type ProductImageProps = {
  imageUrl: string;
  alt?: string;
};

function ProductImage({ imageUrl, alt }: ProductImageProps): ReactElement {
  return (
    <Image
      src={imageUrl}
      width={300}
      height={300}
      alt={alt ?? 'product image'}
    />
  );
}

export default ProductImage;
