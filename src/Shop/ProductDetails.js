import React from 'react';
import { useParams } from 'react-router-dom';
import './shop.css';

export default function ProductDetails({ products }) {
  const { index } = useParams();
  const product = products[index];

  return (
    <div>
      <h1>{product.name}</h1>

      {product.isPremium === 'yes' &&
        <h3>This product is premium!</h3>
      }
      <div>{product.type}</div>
      <div>{product.gender}</div>
      <div>color: {product.color}</div>
      <div>size: {product.size}</div>
    </div>
  )
}