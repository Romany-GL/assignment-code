import React, { ReactElement } from 'react';
import styles from '../style.module.css';
type ProductDescriptionProps = {
  description: string;
};

function ProductDescription({
  description,
}: ProductDescriptionProps): ReactElement {
  return (
    <section className={styles.description}>
      <h3> Description</h3>
      <p> {description}</p>
    </section>
  );
}

export default ProductDescription;
