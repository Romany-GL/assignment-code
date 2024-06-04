import React from 'react';
import styles from '../style.module.css';
type ProductSpecificationsProps = {
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  modelCode: string;
  color: string;
};

function ProductSpecifications({
  brand,
  weight,
  height,
  width,
  length,
  modelCode,
  color,
}: ProductSpecificationsProps) {
  return (
    <table className={styles.table}>
      <caption>
        <h3> Specifications</h3>
      </caption>
      <tbody>
        <tr>
          <th scope='row'> Brand</th>
          <td> {brand}</td>
        </tr>
        <tr>
          <th scope='row'> Item weight</th>
          <td> {weight}</td>
        </tr>
        <tr>
          <th scope='row'> Dimensions(cm)</th>
          <td> {`${height} x ${width} x ${length}`}</td>
        </tr>
        <tr>
          <th scope='row'> Item Model number</th>
          <td> {modelCode}</td>
        </tr>
        <tr>
          <th scope='row'> Color</th>
          <td> {color}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductSpecifications;
