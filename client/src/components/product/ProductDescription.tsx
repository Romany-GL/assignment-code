import React, { ReactElement } from 'react';

type ProductDescriptionProps = {
  description: string;
};

function ProductDescription({
  description,
}: ProductDescriptionProps): ReactElement {
  return (
    <section className='product-description'>
      <h3> Description</h3>
      <p> {description}</p>
    </section>
  );
}

export default ProductDescription;
