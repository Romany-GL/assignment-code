import React from 'react';

type ProductSpecificationsProps = {
  brand: string;
  weight: string;
  dimensions: string;
  modelCode: string;
  color: string;
};

function ProductSpecifications({
  brand,
  weight,
  dimensions,
  modelCode,
  color,
}: ProductSpecificationsProps) {
  return <div>ProductSpecifications</div>;
}

export default ProductSpecifications;
